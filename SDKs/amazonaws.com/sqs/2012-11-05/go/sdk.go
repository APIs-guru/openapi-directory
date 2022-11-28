package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"http://sqs.{region}.amazonaws.com",
	"https://sqs.{region}.amazonaws.com",
	"http://sqs.{region}.amazonaws.com.cn",
	"https://sqs.{region}.amazonaws.com.cn",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://docs.aws.amazon.com/sqs/ - Amazon Web Services documentation
type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// GetAddPermission - <p>Adds a permission to a queue for a specific <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of 7 actions.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) GetAddPermission(ctx context.Context, request operations.GetAddPermissionRequest) (*operations.GetAddPermissionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=AddPermission", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAddPermissionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetChangeMessageVisibility - <p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, you have a message with a visibility timeout of 5 minutes. After 3 minutes, you call <code>ChangeMessageVisibility</code> with a timeout of 10 minutes. You can continue to call <code>ChangeMessageVisibility</code> to extend the visibility timeout to the maximum allowed time. If you try to extend the visibility timeout beyond the maximum, your request is rejected.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of inflight messages.</p> <p>Limits that apply to inflight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>
func (s *SDK) GetChangeMessageVisibility(ctx context.Context, request operations.GetChangeMessageVisibilityRequest) (*operations.GetChangeMessageVisibilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=ChangeMessageVisibility", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetChangeMessageVisibilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetCreateQueue - <p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) GetCreateQueue(ctx context.Context, request operations.GetCreateQueueRequest) (*operations.GetCreateQueueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=CreateQueue"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCreateQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetDeleteMessage - <p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message might not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>
func (s *SDK) GetDeleteMessage(ctx context.Context, request operations.GetDeleteMessageRequest) (*operations.GetDeleteMessageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=DeleteMessage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeleteMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetDeleteQueue - <p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) GetDeleteQueue(ctx context.Context, request operations.GetDeleteQueueRequest) (*operations.GetDeleteQueueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=DeleteQueue", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeleteQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetGetQueueAttributes - <p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>
func (s *SDK) GetGetQueueAttributes(ctx context.Context, request operations.GetGetQueueAttributesRequest) (*operations.GetGetQueueAttributesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=GetQueueAttributes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetGetQueueAttributesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetGetQueueURL - <p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>
func (s *SDK) GetGetQueueURL(ctx context.Context, request operations.GetGetQueueURLRequest) (*operations.GetGetQueueURLResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=GetQueueUrl"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetGetQueueURLResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetListDeadLetterSourceQueues - <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
func (s *SDK) GetListDeadLetterSourceQueues(ctx context.Context, request operations.GetListDeadLetterSourceQueuesRequest) (*operations.GetListDeadLetterSourceQueuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=ListDeadLetterSourceQueues", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetListDeadLetterSourceQueuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetListQueueTags - <p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) GetListQueueTags(ctx context.Context, request operations.GetListQueueTagsRequest) (*operations.GetListQueueTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=ListQueueTags", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetListQueueTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetListQueues - <p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) GetListQueues(ctx context.Context, request operations.GetListQueuesRequest) (*operations.GetListQueuesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=ListQueues"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetListQueuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetPurgeQueue - <p>Deletes the messages in a queue specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
func (s *SDK) GetPurgeQueue(ctx context.Context, request operations.GetPurgeQueueRequest) (*operations.GetPurgeQueueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=PurgeQueue", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPurgeQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetReceiveMessage - <p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>
func (s *SDK) GetReceiveMessage(ctx context.Context, request operations.GetReceiveMessageRequest) (*operations.GetReceiveMessageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=ReceiveMessage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetReceiveMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetRemovePermission - <p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
func (s *SDK) GetRemovePermission(ctx context.Context, request operations.GetRemovePermissionRequest) (*operations.GetRemovePermissionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=RemovePermission", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRemovePermissionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetSetQueueAttributes - <p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
func (s *SDK) GetSetQueueAttributes(ctx context.Context, request operations.GetSetQueueAttributesRequest) (*operations.GetSetQueueAttributesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=SetQueueAttributes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetQueueAttributesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetTagQueue - <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) GetTagQueue(ctx context.Context, request operations.GetTagQueueRequest) (*operations.GetTagQueueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=TagQueue", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTagQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetUntagQueue - <p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) GetUntagQueue(ctx context.Context, request operations.GetUntagQueueRequest) (*operations.GetUntagQueueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{AccountNumber}/{QueueName}/#Action=UntagQueue", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUntagQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostAddPermission - <p>Adds a permission to a queue for a specific <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of 7 actions.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) PostAddPermission(ctx context.Context, request operations.PostAddPermissionRequest) (*operations.PostAddPermissionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=AddPermission"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAddPermissionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostChangeMessageVisibility - <p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, you have a message with a visibility timeout of 5 minutes. After 3 minutes, you call <code>ChangeMessageVisibility</code> with a timeout of 10 minutes. You can continue to call <code>ChangeMessageVisibility</code> to extend the visibility timeout to the maximum allowed time. If you try to extend the visibility timeout beyond the maximum, your request is rejected.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of inflight messages.</p> <p>Limits that apply to inflight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>
func (s *SDK) PostChangeMessageVisibility(ctx context.Context, request operations.PostChangeMessageVisibilityRequest) (*operations.PostChangeMessageVisibilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=ChangeMessageVisibility"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostChangeMessageVisibilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostChangeMessageVisibilityBatch - <p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p>
func (s *SDK) PostChangeMessageVisibilityBatch(ctx context.Context, request operations.PostChangeMessageVisibilityBatchRequest) (*operations.PostChangeMessageVisibilityBatchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=ChangeMessageVisibilityBatch"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostChangeMessageVisibilityBatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 482:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 483:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostCreateQueue - <p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) PostCreateQueue(ctx context.Context, request operations.PostCreateQueueRequest) (*operations.PostCreateQueueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=CreateQueue"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCreateQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostDeleteMessage - <p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message might not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>
func (s *SDK) PostDeleteMessage(ctx context.Context, request operations.PostDeleteMessageRequest) (*operations.PostDeleteMessageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=DeleteMessage"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostDeleteMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostDeleteMessageBatch - <p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p>
func (s *SDK) PostDeleteMessageBatch(ctx context.Context, request operations.PostDeleteMessageBatchRequest) (*operations.PostDeleteMessageBatchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=DeleteMessageBatch"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostDeleteMessageBatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 482:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 483:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostDeleteQueue - <p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) PostDeleteQueue(ctx context.Context, request operations.PostDeleteQueueRequest) (*operations.PostDeleteQueueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=DeleteQueue"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostDeleteQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostGetQueueAttributes - <p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>
func (s *SDK) PostGetQueueAttributes(ctx context.Context, request operations.PostGetQueueAttributesRequest) (*operations.PostGetQueueAttributesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=GetQueueAttributes"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostGetQueueAttributesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostGetQueueURL - <p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>
func (s *SDK) PostGetQueueURL(ctx context.Context, request operations.PostGetQueueURLRequest) (*operations.PostGetQueueURLResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=GetQueueUrl"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostGetQueueURLResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostListDeadLetterSourceQueues - <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
func (s *SDK) PostListDeadLetterSourceQueues(ctx context.Context, request operations.PostListDeadLetterSourceQueuesRequest) (*operations.PostListDeadLetterSourceQueuesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=ListDeadLetterSourceQueues"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostListDeadLetterSourceQueuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostListQueueTags - <p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) PostListQueueTags(ctx context.Context, request operations.PostListQueueTagsRequest) (*operations.PostListQueueTagsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=ListQueueTags"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostListQueueTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostListQueues - <p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) PostListQueues(ctx context.Context, request operations.PostListQueuesRequest) (*operations.PostListQueuesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=ListQueues"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostListQueuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostPurgeQueue - <p>Deletes the messages in a queue specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
func (s *SDK) PostPurgeQueue(ctx context.Context, request operations.PostPurgeQueueRequest) (*operations.PostPurgeQueueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=PurgeQueue"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPurgeQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostReceiveMessage - <p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>
func (s *SDK) PostReceiveMessage(ctx context.Context, request operations.PostReceiveMessageRequest) (*operations.PostReceiveMessageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=ReceiveMessage"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostReceiveMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostRemovePermission - <p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
func (s *SDK) PostRemovePermission(ctx context.Context, request operations.PostRemovePermissionRequest) (*operations.PostRemovePermissionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=RemovePermission"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRemovePermissionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostSendMessage - <p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>
func (s *SDK) PostSendMessage(ctx context.Context, request operations.PostSendMessageRequest) (*operations.PostSendMessageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=SendMessage"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSendMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostSendMessageBatch - <p>Delivers up to ten messages to the specified queue. This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important> <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p>
func (s *SDK) PostSendMessageBatch(ctx context.Context, request operations.PostSendMessageBatchRequest) (*operations.PostSendMessageBatchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=SendMessageBatch"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSendMessageBatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 481:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 482:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 483:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 484:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 485:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostSetQueueAttributes - <p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
func (s *SDK) PostSetQueueAttributes(ctx context.Context, request operations.PostSetQueueAttributesRequest) (*operations.PostSetQueueAttributesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=SetQueueAttributes"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetQueueAttributesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 480:
		switch {
		case utils.MatchContentType(contentType, `text/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostTagQueue - <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) PostTagQueue(ctx context.Context, request operations.PostTagQueueRequest) (*operations.PostTagQueueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=TagQueue"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostTagQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostUntagQueue - <p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
func (s *SDK) PostUntagQueue(ctx context.Context, request operations.PostUntagQueueRequest) (*operations.PostUntagQueueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/#Action=UntagQueue"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostUntagQueueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
