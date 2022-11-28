
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/sqs/ - Amazon Web Services documentation"""
import requests
from typing import Any
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://sqs.{region}.amazonaws.com",
	"https://sqs.{region}.amazonaws.com",
	"http://sqs.{region}.amazonaws.com.cn",
	"https://sqs.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/sqs/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_add_permission(self, request: operations.GetAddPermissionRequest) -> operations.GetAddPermissionResponse:
        r"""<p>Adds a permission to a queue for a specific <a href=\"https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P\">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue\">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html\">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of 7 actions.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=AddPermission", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_change_message_visibility(self, request: operations.GetChangeMessageVisibilityRequest) -> operations.GetChangeMessageVisibilityResponse:
        r"""<p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html\">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, you have a message with a visibility timeout of 5 minutes. After 3 minutes, you call <code>ChangeMessageVisibility</code> with a timeout of 10 minutes. You can continue to call <code>ChangeMessageVisibility</code> to extend the visibility timeout to the maximum allowed time. If you try to extend the visibility timeout beyond the maximum, your request is rejected.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of inflight messages.</p> <p>Limits that apply to inflight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href=\"https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs\">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=ChangeMessageVisibility", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangeMessageVisibilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_queue(self, request: operations.GetCreateQueueRequest) -> operations.GetCreateQueueResponse:
        r"""<p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving\">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html\">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateQueue"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_message(self, request: operations.GetDeleteMessageRequest) -> operations.GetDeleteMessageResponse:
        r"""<p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message might not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=DeleteMessage", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_queue(self, request: operations.GetDeleteQueueRequest) -> operations.GetDeleteQueueResponse:
        r"""<p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=DeleteQueue", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_queue_attributes(self, request: operations.GetGetQueueAttributesRequest) -> operations.GetGetQueueAttributesResponse:
        r"""<p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html\">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=GetQueueAttributes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetQueueAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_queue_url(self, request: operations.GetGetQueueURLRequest) -> operations.GetGetQueueURLResponse:
        r"""<p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue\">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetQueueUrl"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetQueueURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_dead_letter_source_queues(self, request: operations.GetListDeadLetterSourceQueuesRequest) -> operations.GetListDeadLetterSourceQueuesResponse:
        r"""<p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html\">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=ListDeadLetterSourceQueues", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListDeadLetterSourceQueuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_queue_tags(self, request: operations.GetListQueueTagsRequest) -> operations.GetListQueueTagsResponse:
        r"""<p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html\">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=ListQueueTags", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListQueueTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_queues(self, request: operations.GetListQueuesRequest) -> operations.GetListQueuesResponse:
        r"""<p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListQueues"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListQueuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_purge_queue(self, request: operations.GetPurgeQueueRequest) -> operations.GetPurgeQueueResponse:
        r"""<p>Deletes the messages in a queue specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=PurgeQueue", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPurgeQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_receive_message(self, request: operations.GetReceiveMessageRequest) -> operations.GetReceiveMessageResponse:
        r"""<p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html\">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href=\"https://www.ietf.org/rfc/rfc1321.txt\">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html\">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html\">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=ReceiveMessage", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReceiveMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_remove_permission(self, request: operations.GetRemovePermissionRequest) -> operations.GetRemovePermissionResponse:
        r"""<p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=RemovePermission", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemovePermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_set_queue_attributes(self, request: operations.GetSetQueueAttributesRequest) -> operations.GetSetQueueAttributesResponse:
        r"""<p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=SetQueueAttributes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetQueueAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_tag_queue(self, request: operations.GetTagQueueRequest) -> operations.GetTagQueueResponse:
        r"""<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html\">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues\">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=TagQueue", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_untag_queue(self, request: operations.GetUntagQueueRequest) -> operations.GetUntagQueueResponse:
        r"""<p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html\">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{AccountNumber}/{QueueName}/#Action=UntagQueue", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUntagQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_add_permission(self, request: operations.PostAddPermissionRequest) -> operations.PostAddPermissionResponse:
        r"""<p>Adds a permission to a queue for a specific <a href=\"https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P\">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue\">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html\">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of 7 actions.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddPermission"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_change_message_visibility(self, request: operations.PostChangeMessageVisibilityRequest) -> operations.PostChangeMessageVisibilityResponse:
        r"""<p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html\">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, you have a message with a visibility timeout of 5 minutes. After 3 minutes, you call <code>ChangeMessageVisibility</code> with a timeout of 10 minutes. You can continue to call <code>ChangeMessageVisibility</code> to extend the visibility timeout to the maximum allowed time. If you try to extend the visibility timeout beyond the maximum, your request is rejected.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of inflight messages.</p> <p>Limits that apply to inflight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href=\"https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs\">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ChangeMessageVisibility"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChangeMessageVisibilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_change_message_visibility_batch(self, request: operations.PostChangeMessageVisibilityBatchRequest) -> operations.PostChangeMessageVisibilityBatchResponse:
        r"""<p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ChangeMessageVisibilityBatch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChangeMessageVisibilityBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_queue(self, request: operations.PostCreateQueueRequest) -> operations.PostCreateQueueResponse:
        r"""<p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving\">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html\">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateQueue"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_message(self, request: operations.PostDeleteMessageRequest) -> operations.PostDeleteMessageResponse:
        r"""<p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message might not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteMessage"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_message_batch(self, request: operations.PostDeleteMessageBatchRequest) -> operations.PostDeleteMessageBatchResponse:
        r"""<p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteMessageBatch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteMessageBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_queue(self, request: operations.PostDeleteQueueRequest) -> operations.PostDeleteQueueResponse:
        r"""<p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteQueue"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_queue_attributes(self, request: operations.PostGetQueueAttributesRequest) -> operations.PostGetQueueAttributesResponse:
        r"""<p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html\">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetQueueAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetQueueAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_queue_url(self, request: operations.PostGetQueueURLRequest) -> operations.PostGetQueueURLResponse:
        r"""<p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue\">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetQueueUrl"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetQueueURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_dead_letter_source_queues(self, request: operations.PostListDeadLetterSourceQueuesRequest) -> operations.PostListDeadLetterSourceQueuesResponse:
        r"""<p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html\">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListDeadLetterSourceQueues"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListDeadLetterSourceQueuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_queue_tags(self, request: operations.PostListQueueTagsRequest) -> operations.PostListQueueTagsResponse:
        r"""<p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html\">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListQueueTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListQueueTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_queues(self, request: operations.PostListQueuesRequest) -> operations.PostListQueuesResponse:
        r"""<p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListQueues"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListQueuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_purge_queue(self, request: operations.PostPurgeQueueRequest) -> operations.PostPurgeQueueResponse:
        r"""<p>Deletes the messages in a queue specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PurgeQueue"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPurgeQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_receive_message(self, request: operations.PostReceiveMessageRequest) -> operations.PostReceiveMessageResponse:
        r"""<p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html\">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href=\"https://www.ietf.org/rfc/rfc1321.txt\">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html\">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html\">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ReceiveMessage"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReceiveMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_remove_permission(self, request: operations.PostRemovePermissionRequest) -> operations.PostRemovePermissionResponse:
        r"""<p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemovePermission"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRemovePermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_send_message(self, request: operations.PostSendMessageRequest) -> operations.PostSendMessageResponse:
        r"""<p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href=\"http://www.w3.org/TR/REC-xml/#charsets\">W3C specification for characters</a>.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendMessage"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_send_message_batch(self, request: operations.PostSendMessageBatchRequest) -> operations.PostSendMessageBatchResponse:
        r"""<p>Delivers up to ten messages to the specified queue. This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href=\"http://www.w3.org/TR/REC-xml/#charsets\">W3C specification for characters</a>.</p> </important> <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p> <p> <code>&amp;AttributeName.1=first</code> </p> <p> <code>&amp;AttributeName.2=second</code> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendMessageBatch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendMessageBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_queue_attributes(self, request: operations.PostSetQueueAttributesRequest) -> operations.PostSetQueueAttributesResponse:
        r"""<p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetQueueAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetQueueAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_tag_queue(self, request: operations.PostTagQueueRequest) -> operations.PostTagQueueResponse:
        r"""<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html\">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues\">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=TagQueue"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTagQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_untag_queue(self, request: operations.PostUntagQueueRequest) -> operations.PostUntagQueueResponse:
        r"""<p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html\">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name\">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UntagQueue"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUntagQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    