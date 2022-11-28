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
	"https://api.bitbucket.org/2.0",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://bitbucket.org/api
type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
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

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// DeleteAddon - Deletes the application for the user.
//
// This endpoint is intended to be used by Bitbucket Connect apps
// and only supports JWT authentication -- that is how Bitbucket
// identifies the particular installation of the app. Developers
// with applications registered in the "Develop Apps" section
// of Bitbucket Marketplace need not use this endpoint as
// updates for those applications can be sent out via the
// UI of that section.
//
// ```
//
//	$ curl -X DELETE https://api.bitbucket.org/2.0/addon \
//	  -H "Authorization: JWT <JWT Token>"
//
// ```
func (s *SDK) DeleteAddon(ctx context.Context, request operations.DeleteAddonRequest) (*operations.DeleteAddonResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/addon"

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAddonResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteAddonLinkersLinkerKeyValues - Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
// specified linker of the authenticated application.
func (s *SDK) DeleteAddonLinkersLinkerKeyValues(ctx context.Context, request operations.DeleteAddonLinkersLinkerKeyValuesRequest) (*operations.DeleteAddonLinkersLinkerKeyValuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/addon/linkers/{linker_key}/values", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAddonLinkersLinkerKeyValuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteAddonLinkersLinkerKeyValuesValueID - Delete a single [linker](/cloud/bitbucket/modules/linker/) value
// of the authenticated application.
func (s *SDK) DeleteAddonLinkersLinkerKeyValuesValueID(ctx context.Context, request operations.DeleteAddonLinkersLinkerKeyValuesValueIDRequest) (*operations.DeleteAddonLinkersLinkerKeyValuesValueIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/addon/linkers/{linker_key}/values/{value_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAddonLinkersLinkerKeyValuesValueIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlug - Deletes the repository. This is an irreversible operation.
//
// This does not affect its forks.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlug(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsID - Deletes an existing branch restriction rule.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove - Redact the authenticated user's approval of the specified commit.
//
// This operation is only available to users that have explicit access to
// the repository. In contrast, just the fact that a repository is
// publicly accessible to users does not give them the ability to approve
// commits.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Removes a default reviewer from the repository.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID - This deletes a deploy key from a repository.
//
// Example:
// ```
// $ curl -XDELETE \
// -H "Authorization <auth header>" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
// ```
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename - Deletes the specified download artifact from the repository.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugHooksUID - Deletes the specified webhook subscription from the given
// repository.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugHooksUID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugIssuesIssueID - Deletes the specified issue. This requires write access to the
// repository.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugIssuesIssueID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Issue = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath - Deletes an attachment.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID - Deletes the specified comment.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVote - Retract your vote.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVote(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch - Stop watching this issue.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove - Redact the authenticated user's approval of the specified pull
// request.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID - Deletes a specific pull request comment.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugRefsBranchesName - Delete a branch in the specified repository.
//
// The main branch is not allowed to be deleted and will return a 400
// response.
//
// The branch name should not include any prefixes (e.g.
// refs/heads).
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugRefsBranchesName(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugRefsTagsName - Delete a tag in the specified repository.
//
// For Git, the tag name should not include any prefixes (e.g. refs/tags).
// For Mercurial, this adds a commit to the main branch that removes the
// specified tag.
func (s *SDK) DeleteRepositoriesWorkspaceRepoSlugRefsTagsName(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteSnippetsWorkspaceEncodedID - Deletes a snippet and returns an empty response.
func (s *SDK) DeleteSnippetsWorkspaceEncodedID(ctx context.Context, request operations.DeleteSnippetsWorkspaceEncodedIDRequest) (*operations.DeleteSnippetsWorkspaceEncodedIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSnippetsWorkspaceEncodedIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteSnippetsWorkspaceEncodedIDCommentsCommentID - Deletes a snippet comment.
//
// Comments can only be removed by their author.
func (s *SDK) DeleteSnippetsWorkspaceEncodedIDCommentsCommentID(ctx context.Context, request operations.DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDRequest) (*operations.DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteSnippetsWorkspaceEncodedIDNodeID - Deletes the snippet.
//
// Note that this only works for versioned URLs that point to the latest
// commit of the snippet. Pointing to an older commit results in a 405
// status code.
//
// To delete a snippet, regardless of whether or not concurrent changes
// are being made to it, use `DELETE /snippets/{encoded_id}` instead.
func (s *SDK) DeleteSnippetsWorkspaceEncodedIDNodeID(ctx context.Context, request operations.DeleteSnippetsWorkspaceEncodedIDNodeIDRequest) (*operations.DeleteSnippetsWorkspaceEncodedIDNodeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSnippetsWorkspaceEncodedIDNodeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 405:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteSnippetsWorkspaceEncodedIDWatch - Used to stop watching a specific snippet. Returns 204 (No Content)
// to indicate success.
func (s *SDK) DeleteSnippetsWorkspaceEncodedIDWatch(ctx context.Context, request operations.DeleteSnippetsWorkspaceEncodedIDWatchRequest) (*operations.DeleteSnippetsWorkspaceEncodedIDWatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/watch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSnippetsWorkspaceEncodedIDWatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteTeamsUsernameHooksUID - Deletes the specified webhook subscription from the given team
// account.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) DeleteTeamsUsernameHooksUID(ctx context.Context, request operations.DeleteTeamsUsernameHooksUIDRequest) (*operations.DeleteTeamsUsernameHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteTeamsUsernameHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
// and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#delete) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) DeleteTeamsUsernameProjectsProjectKey(ctx context.Context, request operations.DeleteTeamsUsernameProjectsProjectKeyRequest) (*operations.DeleteTeamsUsernameProjectsProjectKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/projects/{project_key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteTeamsUsernameProjectsProjectKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteUsersSelectedUserHooksUID - Deletes the specified webhook subscription from the given user
// account.
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) DeleteUsersSelectedUserHooksUID(ctx context.Context, request operations.DeleteUsersSelectedUserHooksUIDRequest) (*operations.DeleteUsersSelectedUserHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteUsersSelectedUserHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteUsersSelectedUserSSHKeysKeyID - Deletes a specific SSH public key from a user's account
//
// Example:
// ```
// $ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
// ```
func (s *SDK) DeleteUsersSelectedUserSSHKeysKeyID(ctx context.Context, request operations.DeleteUsersSelectedUserSSHKeysKeyIDRequest) (*operations.DeleteUsersSelectedUserSSHKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/ssh-keys/{key_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteUsersSelectedUserSSHKeysKeyIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteWorkspacesWorkspaceHooksUID - Deletes the specified webhook subscription from the given workspace.
func (s *SDK) DeleteWorkspacesWorkspaceHooksUID(ctx context.Context, request operations.DeleteWorkspacesWorkspaceHooksUIDRequest) (*operations.DeleteWorkspacesWorkspaceHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteWorkspacesWorkspaceHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteWorkspacesWorkspaceProjectsProjectKey - Deletes this project. This is an irreversible operation.
//
// You cannot delete a project that still contains repositories.
// To delete the project, [delete](../../../repositories/%7Bworkspace%7D/%7Brepo_slug%7D#delete)
// or transfer the repositories first.
//
// Example:
// ```
// $ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
// ```
func (s *SDK) DeleteWorkspacesWorkspaceProjectsProjectKey(ctx context.Context, request operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest) (*operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/projects/{project_key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetAddonLinkers - Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
// for the authenticated application.
func (s *SDK) GetAddonLinkers(ctx context.Context, request operations.GetAddonLinkersRequest) (*operations.GetAddonLinkersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/addon/linkers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAddonLinkersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetAddonLinkersLinkerKey - Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
// for the authenticated application.
func (s *SDK) GetAddonLinkersLinkerKey(ctx context.Context, request operations.GetAddonLinkersLinkerKeyRequest) (*operations.GetAddonLinkersLinkerKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/addon/linkers/{linker_key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAddonLinkersLinkerKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetAddonLinkersLinkerKeyValues - Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
// specified linker of the authenticated application.
//
// A linker value lets applications supply values to modify its regular expression.
//
// The base regular expression must use a Bitbucket-specific match group `(?K)`
// which will be translated to `([\w\-]+)`. A value must match this pattern.
//
// [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
func (s *SDK) GetAddonLinkersLinkerKeyValues(ctx context.Context, request operations.GetAddonLinkersLinkerKeyValuesRequest) (*operations.GetAddonLinkersLinkerKeyValuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/addon/linkers/{linker_key}/values", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAddonLinkersLinkerKeyValuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetAddonLinkersLinkerKeyValuesValueID - Get a single [linker](/cloud/bitbucket/modules/linker/) value
// of the authenticated application.
func (s *SDK) GetAddonLinkersLinkerKeyValuesValueID(ctx context.Context, request operations.GetAddonLinkersLinkerKeyValuesValueIDRequest) (*operations.GetAddonLinkersLinkerKeyValuesValueIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/addon/linkers/{linker_key}/values/{value_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAddonLinkersLinkerKeyValuesValueIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetHookEvents - Returns the webhook resource or subject types on which webhooks can
// be registered.
//
// Each resource/subject type contains an `events` link that returns the
// paginated list of specific events each individual subject type can
// emit.
//
// This endpoint is publicly accessible and does not require
// authentication or scopes.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/hook_events
//
//	{
//	    "repository": {
//	        "links": {
//	            "events": {
//	                "href": "https://api.bitbucket.org/2.0/hook_events/repository"
//	            }
//	        }
//	    },
//	    "team": {
//	        "links": {
//	            "events": {
//	                "href": "https://api.bitbucket.org/2.0/hook_events/team"
//	            }
//	        }
//	    },
//	    "user": {
//	        "links": {
//	            "events": {
//	                "href": "https://api.bitbucket.org/2.0/hook_events/user"
//	            }
//	        }
//	    }
//	}
//
// ```
func (s *SDK) GetHookEvents(ctx context.Context, request operations.GetHookEventsRequest) (*operations.GetHookEventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/hook_events"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetHookEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SubjectTypes
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SubjectTypes = out
		}
	}

	return res, nil
}

// GetHookEventsSubjectType - Returns a paginated list of all valid webhook events for the
// specified entity.
// **The team and user webhooks are deprecated, and you should use workspace instead.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// This is public data that does not require any scopes or authentication.
//
// Example:
//
// NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
// We return the same structure for the other `subject_type` objects.
//
// ```
// $ curl https://api.bitbucket.org/2.0/hook_events/workspace
//
//	{
//	    "page": 1,
//	    "pagelen": 30,
//	    "size": 21,
//	    "values": [
//	        {
//	            "category": "Repository",
//	            "description": "Whenever a repository push occurs",
//	            "event": "repo:push",
//	            "label": "Push"
//	        },
//	        {
//	            "category": "Repository",
//	            "description": "Whenever a repository fork occurs",
//	            "event": "repo:fork",
//	            "label": "Fork"
//	        },
//	        {
//	            "category": "Repository",
//	            "description": "Whenever a repository import occurs",
//	            "event": "repo:imported",
//	            "label": "Import"
//	        },
//	        ...
//	        {
//	            "category":"Pull Request",
//	            "label":"Approved",
//	            "description":"When someone has approved a pull request",
//	            "event":"pullrequest:approved"
//	        },
//	    ]
//	}
//
// ```
func (s *SDK) GetHookEventsSubjectType(ctx context.Context, request operations.GetHookEventsSubjectTypeRequest) (*operations.GetHookEventsSubjectTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/hook_events/{subject_type}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetHookEventsSubjectTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedHookEvents
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedHookEvents = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetPullrequestsSelectedUser - Returns all pull requests authored by the specified user.
//
// By default only open pull requests are returned. This can be controlled
// using the `state` query parameter. To retrieve pull requests that are
// in one of multiple states, repeat the `state` parameter for each
// individual state.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../../../meta/filtering) for more details.
func (s *SDK) GetPullrequestsSelectedUser(ctx context.Context, request operations.GetPullrequestsSelectedUserRequest) (*operations.GetPullrequestsSelectedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/pullrequests/{selected_user}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPullrequestsSelectedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositories - Returns a paginated list of all public repositories.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../meta/filtering) for more details.
func (s *SDK) GetRepositories(ctx context.Context, request operations.GetRepositoriesRequest) (*operations.GetRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repositories"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositories
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositories = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspace - Returns a paginated list of all repositories owned by the specified
// account or UUID.
//
// The result can be narrowed down based on the authenticated user's role.
//
// E.g. with `?role=contributor`, only those repositories that the
// authenticated user has write access to are returned (this includes any
// repo the user is an admin on, as that implies write access).
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../meta/filtering) for more details.
func (s *SDK) GetRepositoriesWorkspace(ctx context.Context, request operations.GetRepositoriesWorkspaceRequest) (*operations.GetRepositoriesWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositories
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositories = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 410:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlug - Returns the object describing this repository.
func (s *SDK) GetRepositoriesWorkspaceRepoSlug(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugRequest) (*operations.GetRepositoriesWorkspaceRepoSlugResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Repository = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugBranchRestrictions - Returns a paginated list of all branch restrictions on the
// repository.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugBranchRestrictions(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedBranchrestrictions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedBranchrestrictions = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugBranchRestrictionsID - Returns a specific branch restriction rule.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugBranchRestrictionsID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Branchrestriction = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugBranchingModel - Return the branching model as applied to the repository. This view is
// read-only. The branching model settings can be changed using the
// [settings](branching-model/settings#get) API.
//
// The returned object:
//
//  1. Always has a `development` property. `development.branch` contains
//     the actual repository branch object that is considered to be the
//     `development` branch. `development.branch` will not be present
//     if it does not exist.
//  2. Might have a `production` property. `production` will not
//     be present when `production` is disabled.
//     `production.branch` contains the actual branch object that is
//     considered to be the `production` branch. `production.branch` will
//     not be present if it does not exist.
//  3. Always has a `branch_types` array which contains all enabled branch
//     types.
//
// Example body:
//
// ```
//
//	{
//	  "development": {
//	    "name": "master",
//	    "branch": {
//	      "type": "branch",
//	      "name": "master",
//	      "target": {
//	        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
//	      }
//	    },
//	    "use_mainbranch": true
//	  },
//	  "production": {
//	    "name": "production",
//	    "branch": {
//	      "type": "branch",
//	      "name": "production",
//	      "target": {
//	        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
//	      }
//	    },
//	    "use_mainbranch": false
//	  },
//	  "branch_types": [
//	    {
//	      "kind": "release",
//	      "prefix": "release/"
//	    },
//	    {
//	      "kind": "hotfix",
//	      "prefix": "hotfix/"
//	    },
//	    {
//	      "kind": "feature",
//	      "prefix": "feature/"
//	    },
//	    {
//	      "kind": "bugfix",
//	      "prefix": "bugfix/"
//	    }
//	  ],
//	  "type": "branching_model",
//	  "links": {
//	    "self": {
//	      "href": "https://api.bitbucket.org/.../branching-model"
//	    }
//	  }
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugBranchingModel(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest) (*operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branching-model", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BranchingModel = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugBranchingModelSettings - Return the branching model configuration for a repository. The returned
// object:
//
//  1. Always has a `development` property for the development branch.
//  2. Always a `production` property for the production branch. The
//     production branch can be disabled.
//  3. The `branch_types` contains all the branch types.
//
// This is the raw configuration for the branching model. A client
// wishing to see the branching model with its actual current branches may
// find the [active model API](../branching-model#get) more useful.
//
// Example body:
//
// ```
//
//	{
//	  "development": {
//	    "is_valid": true,
//	    "name": null,
//	    "use_mainbranch": true
//	  },
//	  "production": {
//	    "is_valid": true,
//	    "name": "production",
//	    "use_mainbranch": false,
//	    "enabled": false
//	  },
//	  "branch_types": [
//	    {
//	      "kind": "release",
//	      "enabled": true,
//	      "prefix": "release/"
//	    },
//	    {
//	      "kind": "hotfix",
//	      "enabled": true,
//	      "prefix": "hotfix/"
//	    },
//	    {
//	      "kind": "feature",
//	      "enabled": true,
//	      "prefix": "feature/"
//	    },
//	    {
//	      "kind": "bugfix",
//	      "enabled": false,
//	      "prefix": "bugfix/"
//	    }
//	  ],
//	  "type": "branching_model_settings",
//	  "links": {
//	    "self": {
//	      "href": "https://api.bitbucket.org/.../branching-model/settings"
//	    }
//	  }
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugBranchingModelSettings(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BranchingModelSettings = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommit - Returns the specified commit.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
//
//	{
//	    "rendered": {
//	        "message": {
//	        "raw": "Add a GEORDI_OUTPUT_DIR setting",
//	        "markup": "markdown",
//	        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
//	        "type": "rendered"
//	        }
//	    },
//	    "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
//	    "repository": {
//	        "name": "geordi",
//	        "type": "repository",
//	        "full_name": "bitbucket/geordi",
//	        "links": {
//	            "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
//	            },
//	            "html": {
//	                "href": "https://bitbucket.org/bitbucket/geordi"
//	            },
//	            "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
//	            }
//	        },
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "comments": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
//	        },
//	        "patch": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "html": {
//	            "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "diff": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "approve": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
//	        },
//	        "statuses": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
//	        }
//	    },
//	    "author": {
//	        "raw": "Brodie Rao <a@b.c>",
//	        "type": "author",
//	        "user": {
//	            "display_name": "Brodie Rao",
//	            "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
//	            "links": {
//	                "self": {
//	                    "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
//	                },
//	                "html": {
//	                    "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
//	                },
//	                "avatar": {
//	                    "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
//	                }
//	            },
//	            "type": "user",
//	            "nickname": "brodie",
//	            "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
//	        }
//	    },
//	    "summary": {
//	        "raw": "Add a GEORDI_OUTPUT_DIR setting",
//	        "markup": "markdown",
//	        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
//	        "type": "rendered"
//	    },
//	    "participants": [],
//	    "parents": [
//	        {
//	            "type": "commit",
//	            "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
//	            "links": {
//	                "self": {
//	                    "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
//	                },
//	                "html": {
//	                    "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
//	                }
//	            }
//	        }
//	    ],
//	    "date": "2012-07-16T19:37:54+00:00",
//	    "message": "Add a GEORDI_OUTPUT_DIR setting",
//	    "type": "commit"
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugCommitCommit(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commit = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommitComments - Returns the commit's comments.
//
// This includes both global and inline comments.
//
// The default sorting is oldest to newest and can be overridden with
// the `sort` query parameter.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugCommitCommitComments(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedCommitComments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedCommitComments = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID - Returns the specified commit comment.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitComment = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses - Returns all statuses (e.g. build results) for a specific commit.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedCommitstatuses
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedCommitstatuses = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Returns the specified build status for a commit.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commitstatus = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommits - These are the repository's commits. They are paginated and returned
// in reverse chronological order, similar to the output of `git log`.
// Like these tools, the DAG can be filtered.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/
//
// Returns all commits in the repo in topological order (newest commit
// first). All branches and tags are included (similar to
// `git log --all`).
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master
//
// Returns all commits in the repo that are not on master
// (similar to `git log --all ^master`).
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar
//
// Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
// `fubar` (similar to `git log foo bar ^fu ^fubar`).
//
// An optional `path` parameter can be specified that will limit the
// results to commits that affect that path. `path` can either be a file
// or a directory. If a directory is specified, commits are returned that
// have modified any file in the directory tree rooted by `path`. It is
// important to note that if the `path` parameter is specified, the commits
// returned by this endpoint may no longer be a DAG, parent commits that
// do not modify the path will be omitted from the response.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master
//
// Returns all commits that are on refs `foo` or `bar`, but not on `master`
// that changed the file README.md.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master
//
// Returns all commits that are on refs `foo` or `bar`, but not on `master`
// that changed to a file in any file in the directory src or its children.
//
// Because the response could include a very large number of commits, it
// is paginated. Follow the 'next' link in the response to navigate to the
// next page of commits. As with other paginated resources, do not
// construct your own links.
//
// When the include and exclude parameters are more than can fit in a
// query string, clients can use a `x-www-form-urlencoded` POST instead.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugCommits(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitsRevision - These are the repository's commits. They are paginated and returned
// in reverse chronological order, similar to the output of `git log`.
// Like these tools, the DAG can be filtered.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/master
//
// Returns all commits on rev `master` (similar to `git log master`).
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master
//
// Returns all commits on ref `dev` or `foo`, except those that are reachable on
// `master` (similar to `git log dev foo ^master`).
//
// An optional `path` parameter can be specified that will limit the
// results to commits that affect that path. `path` can either be a file
// or a directory. If a directory is specified, commits are returned that
// have modified any file in the directory tree rooted by `path`. It is
// important to note that if the `path` parameter is specified, the commits
// returned by this endpoint may no longer be a DAG, parent commits that
// do not modify the path will be omitted from the response.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master
//
// Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
// that changed the file README.md.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master
//
// Returns all commits that are on refs `dev` or `foo`, but not on `master`
// that changed to a file in any file in the directory src or its children.
//
// Because the response could include a very large number of commits, it
// is paginated. Follow the 'next' link in the response to navigate to the
// next page of commits. As with other paginated resources, do not
// construct your own links.
//
// When the include and exclude parameters are more than can fit in a
// query string, clients can use a `x-www-form-urlencoded` POST instead.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugCommitsRevision(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugComponents - Returns the components that have been defined in the issue tracker.
//
// This resource is only available on repositories that have the issue
// tracker enabled.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugComponents(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/components", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedComponents
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedComponents = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugComponentsComponentID - Returns the specified issue tracker component object.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugComponentsComponentID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/components/{component_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Component = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDefaultReviewers - Returns the repository's default reviewers.
//
// These are the users that are automatically added as reviewers on every
// new pull request that is created.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDefaultReviewers(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Returns the specified reviewer.
//
// This can be used to test whether a user is among the repository's
// default reviewers list. A 404 indicates that that specified user is not
// a default reviewer.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDeployKeys - Returns all deploy-keys belonging to a repository.
//
// Example:
// ```
// $ curl -H "Authorization <auth header>" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys
//
// Output:
//
//	{
//	    "pagelen": 10,
//	    "values": [
//	        {
//	            "id": 123,
//	            "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	            "label": "mykey",
//	            "type": "deploy_key",
//	            "created_on": "2018-08-15T23:50:59.993890+00:00",
//	            "repository": {
//	                "full_name": "mleu/test",
//	                "name": "test",
//	                "type": "repository",
//	                "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	            },
//	            "links":{
//	                "self":{
//	                    "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
//	                }
//	            }
//	            "last_used": null,
//	            "comment": "mleu@C02W454JHTD8"
//	        }
//	    ],
//	    "page": 1,
//	    "size": 1
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDeployKeys(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedDeployKeys
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedDeployKeys = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID - Returns the deploy key belonging to a specific key.
//
// Example:
// ```
// $ curl -H "Authorization <auth header>" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234
//
// Output:
//
//	{
//	    "comment": "mleu@C02W454JHTD8",
//	    "last_used": null,
//	    "links": {
//	        "self": {
//	            "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
//	        }
//	    },
//	    "repository": {
//	        "full_name": "mleu/test",
//	        "name": "test",
//	        "type": "repository",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "label": "mykey",
//	    "created_on": "2018-08-15T23:50:59.993890+00:00",
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	    "id": 1234,
//	    "type": "deploy_key"
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeployKey = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDiffSpec - Produces a raw git-style diff.
//
// #### Single commit spec
//
// If the `spec` argument to this API is a single commit, the diff is
// produced against the first parent of the specified commit.
//
// #### Two commit spec
//
// Two commits separated by `..` may be provided as the `spec`, e.g.,
// `3a8b42..9ff173`. When two commits are provided and the `merge` query
// parameter is true or absent, this API produces a 3-way diff, also
// referred to as a merge diff. This is equivalent to merging the left
// branch into the right branch and then computing the diff of the merge
// commit against its first parent (the right branch). These diffs have
// the same behavior as pull requests that show the 3-way diff, such as
// the [Bitbucket Cloud Pull
// Request](https://blog.developer.atlassian.com/a-better-pull-request/).
// For a simple git-style diff, add `merge=false` to the query.
//
// The two commits are interpreted as follows:
//
//   - First commit: the commit containing the changes we wish to preview
//   - Second commit: the commit representing the state to which we want to
//     compare the first commit
//   - **Note**: This is the opposite of the order used in `git diff`.
//
// #### Comparison to patches
//
// While similar to patches, diffs:
//
//   - Don't have a commit header (username, commit message, etc)
//   - Support the optional `path=foo/bar.py` query param to filter
//     the diff to just that one file diff
//
// #### Response
//
// The raw diff is returned as-is, in whatever encoding the files in the
// repository use. It is not decoded into unicode. As such, the
// content-type is `text/plain`.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDiffSpec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/diff/{spec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDiffstatSpec - Produces a response in JSON format with a record for every path
// modified, including information on the type of the change and the
// number of lines added and removed.
//
// #### Single commit spec
//
// If the `spec` argument to this API is a single commit, the diff is
// produced against the first parent of the specified commit.
//
// #### Two commit spec
//
// Two commits separated by `..` may be provided as the `spec`, e.g.,
// `3a8b42..9ff173`. When two commits are provided and the `merge` query
// parameter is true or absent, this API produces a 3-way diff, also
// referred to as a merge diff. This is equivalent to merging the left
// branch into the right branch and then computing the diff of the merge
// commit against its first parent (the right branch). These diffs have
// the same behavior as pull requests that show the 3-way diff, such as
// the [Bitbucket Cloud Pull
// Request](https://blog.developer.atlassian.com/a-better-pull-request/).
// For a simple git-style diff, add `merge=false` to the query.
//
// The two commits are interpreted as follows:
//
//   - First commit: the commit containing the changes we wish to preview
//   - Second commit: the commit representing the state to which we want to
//     compare the first commit
//   - **Note**: This is the opposite of the order used in `git diff`.
//
// #### Sample output
// ```
// curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
//
//	{
//	    "pagelen": 500,
//	    "values": [
//	        {
//	            "type": "diffstat",
//	            "status": "modified",
//	            "lines_removed": 1,
//	            "lines_added": 2,
//	            "old": {
//	                "path": "setup.py",
//	                "escaped_path": "setup.py",
//	                "type": "commit_file",
//	                "links": {
//	                    "self": {
//	                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
//	                    }
//	                }
//	            },
//	            "new": {
//	                "path": "setup.py",
//	                "escaped_path": "setup.py",
//	                "type": "commit_file",
//	                "links": {
//	                    "self": {
//	                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
//	                    }
//	                }
//	            }
//	        }
//	    ],
//	    "page": 1,
//	    "size": 1
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDiffstatSpec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/diffstat/{spec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedDiffstats
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedDiffstats = out
		}
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDownloads - Returns a list of download links associated with the repository.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDownloads(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/downloads", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDownloadsFilename - Return a redirect to the contents of a download artifact.
//
// This endpoint returns the actual file contents and not the artifact's
// metadata.
//
//	$ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
//	Hello World
func (s *SDK) GetRepositoriesWorkspaceRepoSlugDownloadsFilename(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath - Returns a paginated list of commits that modified the specified file.
//
// Commits are returned in reverse chronological order. This is roughly
// equivalent to the following commands:
//
//	$ git log --follow --date-order <sha> <path>
//
//	$ hg log --follow <path>
//
// By default, Bitbucket will follow renames and the path name in the
// returned entries reflects that. This can be turned off using the
// `?renames=false` query parameter.
//
// Results are returned in descending chronological order by default, and
// like most endpoints you can
// [filter and sort](../../../../../../meta/filtering) the response to
// only provide exactly the data you want.
//
// For example, if you wanted to find commits made before 2011-05-18
// against a file named `README.rst`, but you only wanted the path and
// date, your query would look like this:
//
// ```
//
//	$ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
//	  '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
//
//	{
//	  "values": [
//	    {
//	      "commit": {
//	        "date": "2011-05-17T07:32:09+00:00"
//	      },
//	      "path": "README.rst"
//	    },
//	    {
//	      "commit": {
//	        "date": "2011-05-16T06:33:28+00:00"
//	      },
//	      "path": "README.txt"
//	    },
//	    {
//	      "commit": {
//	        "date": "2011-05-16T06:15:39+00:00"
//	      },
//	      "path": "README.txt"
//	    }
//	  ]
//	}
//
// ```
//
// In the response you can see that the file was renamed to `README.rst`
// by the commit made on 2011-05-16, and was previously named `README.txt`.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest) (*operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedFiles
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedFiles = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugForks - Returns a paginated list of all the forks of the specified
// repository.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugForks(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugForksRequest) (*operations.GetRepositoriesWorkspaceRepoSlugForksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/forks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugForksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositories
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositories = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugHooks - Returns a paginated list of webhooks installed on this repository.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugHooks(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugHooksRequest) (*operations.GetRepositoriesWorkspaceRepoSlugHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWebhookSubscriptions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWebhookSubscriptions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugHooksUID - Returns the webhook with the specified id installed on the specified
// repository.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugHooksUID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugHooksUIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssues - Returns the issues in the issue tracker.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssues(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedIssues
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedIssues = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZip - This endpoint is used to poll for the progress of an issue export
// job and return the zip file after the job is complete.
// As long as the job is running, this will return a 200 response
// with in the response body a description of the current status.
//
// After the job has been scheduled, but before it starts executing, this
// endpoint's response is:
//
//	{
//	 "type": "issue_job_status",
//	 "status": "ACCEPTED",
//	 "phase": "Initializing",
//	 "total": 0,
//	 "count": 0,
//	 "pct": 0
//	}
//
// Then once it starts running, it becomes:
//
//	{
//	 "type": "issue_job_status",
//	 "status": "STARTED",
//	 "phase": "Attachments",
//	 "total": 15,
//	 "count": 11,
//	 "pct": 73
//	}
//
// Once the job has successfully completed, it returns a stream of the zip file.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZip(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IssueJobStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueJobStatus = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesImport - When using GET, this endpoint reports the status of the current import task. Request example:
//
// ```
// $ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
// ```
//
// After the job has been scheduled, but before it starts executing, this endpoint's response is:
//
// ```
// < HTTP/1.1 202 Accepted
//
//	{
//	    "type": "issue_job_status",
//	    "status": "PENDING",
//	    "phase": "Attachments",
//	    "total": 15,
//	    "count": 0,
//	    "percent": 0
//	}
//
// ```
//
// Once it starts running, it is a 202 response with status STARTED and progress filled.
//
// After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesImport(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/import", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IssueJobStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueJobStatus = out
		}
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IssueJobStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueJobStatus = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueID - Returns the specified issue.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Issue = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 410:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments - Returns all attachments for this issue.
//
// This returns the files' meta data. This does not return the files'
// actual contents.
//
// The files are always ordered by their upload date.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedIssueAttachments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedIssueAttachments = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath - Returns the contents of the specified file attachment.
//
// Note that this endpoint does not return a JSON response, but instead
// returns a redirect pointing to the actual file that in turn will return
// the raw contents.
//
// The redirect URL contains a one-time token that has a limited lifetime.
// As a result, the link should not be persisted, stored, or shared.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges - Returns the list of all changes that have been made to the specified
// issue. Changes are returned in chronological order with the oldest
// change first.
//
// Each time an issue is edited in the UI or through the API, an immutable
// change record is created under the `/issues/123/changes` endpoint. It
// also has a comment associated with the change.
//
// Note that this operation is changing significantly, due to privacy changes.
// See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api)
// for details.
//
// ```
// $ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .
//
//	{
//	  "pagelen": 20,
//	  "values": [
//	    {
//	      "changes": {
//	        "priority": {
//	          "new": "trivial",
//	          "old": "major"
//	        },
//	        "assignee": {
//	          "new": "",
//	          "old": "evzijst"
//	        },
//	        "assignee_account_id": {
//	          "new": "",
//	          "old": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
//	        },
//	        "kind": {
//	          "new": "enhancement",
//	          "old": "bug"
//	        }
//	      },
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2"
//	        },
//	        "html": {
//	          "href": "https://bitbucket.org/evzijst/dogslow/issues/1#comment-2"
//	        }
//	      },
//	      "issue": {
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1"
//	          }
//	        },
//	        "type": "issue",
//	        "id": 1,
//	        "repository": {
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/evzijst/dogslow"
//	            },
//	            "avatar": {
//	              "href": "https://bitbucket.org/evzijst/dogslow/avatar/32/"
//	            }
//	          },
//	          "type": "repository",
//	          "name": "dogslow",
//	          "full_name": "evzijst/dogslow",
//	          "uuid": "{988b17c6-1a47-4e70-84ee-854d5f012bf6}"
//	        },
//	        "title": "Updated title"
//	      },
//	      "created_on": "2018-03-03T00:35:28.353630+00:00",
//	      "user": {
//	        "username": "evzijst",
//	        "nickname": "evzijst",
//	        "display_name": "evzijst",
//	        "type": "user",
//	        "uuid": "{aaa7972b-38af-4fb1-802d-6e3854c95778}",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/users/evzijst"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/evzijst/"
//	          },
//	          "avatar": {
//	            "href": "https://bitbucket.org/account/evzijst/avatar/32/"
//	          }
//	        }
//	      },
//	      "message": {
//	        "raw": "Removed assignee, changed kind and priority.",
//	        "markup": "markdown",
//	        "html": "<p>Removed assignee, changed kind and priority.</p>",
//	        "type": "rendered"
//	      },
//	      "type": "issue_change",
//	      "id": 2
//	    }
//	  ],
//	  "page": 1
//	}
//
// ```
//
// Changes support [filtering and sorting](../../../meta/filtering) that
// can be used to search for specific changes. For instance, to see
// when an issue transitioned to "resolved":
//
// ```
//
//	$ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
//	   -G --data-urlencode='q=changes.state.new = "resolved"'
//
// ```
//
// This resource is only available on repositories that have the issue
// tracker enabled.
//
// N.B.
//
// The `changes.assignee` and `changes.assignee_account_id` fields are not
// a `user` object. Instead, they contain the raw `username` and
// `account_id` of the user. This is to protect the integrity of the audit
// log even after a user account gets deleted.
//
// The `changes.assignee` field is deprecated will disappear in the
// future. Use `changes.assignee_account_id` instead.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedLogEntries
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedLogEntries = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeID - Returns the specified issue change object.
//
// This resource is only available on repositories that have the issue
// tracker enabled.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueChange = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDComments - Returns a paginated list of all comments that were made on the
// specified issue.
//
// The default sorting is oldest to newest and can be overridden with
// the `sort` query parameter.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../../../../../meta/filtering) for more details.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDComments(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedIssueComments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedIssueComments = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID - Returns the specified issue comment object.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueComment = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVote - Check whether the authenticated user has voted for this issue.
// A 204 status code indicates that the user has voted, while a 404
// implies they haven't.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVote(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch - Indicated whether or not the authenticated user is watching this
// issue.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest) (*operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec - Returns the best common ancestor between two commits, specified in a revspec
// of 2 commits (e.g. 3a8b42..9ff173).
//
// If more than one best common ancestor exists, only one will be returned. It is
// unspecified which will be returned.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commit = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugMilestones - Returns the milestones that have been defined in the issue tracker.
//
// This resource is only available on repositories that have the issue
// tracker enabled.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugMilestones(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/milestones", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedMilestones
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedMilestones = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneID - Returns the specified issue tracker milestone object.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Milestone = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPatchSpec - Produces a raw patch for a single commit (diffed against its first
// parent), or a patch-series for a revspec of 2 commits (e.g.
// `3a8b42..9ff173` where the first commit represents the source and the
// second commit the destination).
//
// In case of the latter (diffing a revspec), a patch series is returned
// for the commits on the source branch (`3a8b42` and its ancestors in
// our example). For Mercurial, a single patch is returned that combines
// the changes of all commits on the source branch.
//
// While similar to diffs, patches:
//
// * Have a commit header (username, commit message, etc)
// * Do not support the `path=foo/bar.py` query parameter
//
// The raw patch is returned as-is, in whatever encoding the files in the
// repository use. It is not decoded into unicode. As such, the
// content-type is `text/plain`.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPatchSpec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/patch/{spec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReports(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCases(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasons(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequests - Returns all pull requests on the specified repository.
//
// By default only open pull requests are returned. This can be controlled
// using the `state` query parameter. To retrieve pull requests that are
// in one of multiple states, repeat the `state` parameter for each
// individual state.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../../../meta/filtering) for more details.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequests(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsActivity - Returns a paginated list of the pull request's activity log.
//
// This handler serves both a v20 and internal endpoint. The v20 endpoint
// returns reviewer comments, updates, approvals and request changes. The internal
// endpoint includes those plus tasks and attachments.
//
// Comments created on a file or a line of code have an inline property.
//
// Comment example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "comment": {
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
//	                    }
//	                },
//	                "deleted": false,
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "content": {
//	                    "raw": "inline with to a dn from lines",
//	                    "markup": "markdown",
//	                    "html": "<p>inline with to a dn from lines</p>",
//	                    "type": "rendered"
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "updated_on": "2019-09-27T00:33:46.055384+00:00",
//	                "inline": {
//	                    "context_lines": "",
//	                    "to": null,
//	                    "path": "",
//	                    "outdated": false,
//	                    "from": 211
//	                },
//	                "type": "pullrequest_comment",
//	                "id": 118571088
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Updates include a state property of OPEN, MERGED, or DECLINED.
//
// Update example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "update": {
//	                "description": "",
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
//	                "destination": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "6a2c16e4a152",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "master"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "reason": "",
//	                "source": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "728c8bad1813",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "username/NONE-add-onClick-prop-for-accessibility"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "state": "OPEN",
//	                "author": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "date": "2019-05-10T06:48:25.305565+00:00"
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Approval example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "approval": {
//	                "date": "2019-09-27T00:37:19.849534+00:00",
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                }
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsActivity(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/activity", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID - Returns the specified pull request.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity - Returns a paginated list of the pull request's activity log.
//
// This handler serves both a v20 and internal endpoint. The v20 endpoint
// returns reviewer comments, updates, approvals and request changes. The internal
// endpoint includes those plus tasks and attachments.
//
// Comments created on a file or a line of code have an inline property.
//
// Comment example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "comment": {
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
//	                    }
//	                },
//	                "deleted": false,
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "content": {
//	                    "raw": "inline with to a dn from lines",
//	                    "markup": "markdown",
//	                    "html": "<p>inline with to a dn from lines</p>",
//	                    "type": "rendered"
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "updated_on": "2019-09-27T00:33:46.055384+00:00",
//	                "inline": {
//	                    "context_lines": "",
//	                    "to": null,
//	                    "path": "",
//	                    "outdated": false,
//	                    "from": 211
//	                },
//	                "type": "pullrequest_comment",
//	                "id": 118571088
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Updates include a state property of OPEN, MERGED, or DECLINED.
//
// Update example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "update": {
//	                "description": "",
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
//	                "destination": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "6a2c16e4a152",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "master"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "reason": "",
//	                "source": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "728c8bad1813",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "username/NONE-add-onClick-prop-for-accessibility"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "state": "OPEN",
//	                "author": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "date": "2019-05-10T06:48:25.305565+00:00"
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Approval example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "approval": {
//	                "date": "2019-09-27T00:37:19.849534+00:00",
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                }
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments - Returns a paginated list of the pull request's comments.
//
// This includes both global, inline comments and replies.
//
// The default sorting is oldest to newest and can be overridden with
// the `sort` query parameter.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../../../../../meta/filtering) for more
// details.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequestComments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequestComments = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID - Returns a specific pull request comment.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PullrequestComment = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits - Returns a paginated list of the pull request's commits.
//
// These are the commits that are being merged into the destination
// branch when the pull requests gets accepted.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff - Redirects to the [repository diff](../../diff/%7Bspec%7D)
// with the revspec that corresponds to the pull request.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat - Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
// with the revspec that corresponds to the pull request.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID - When merging a pull request takes too long, the client receives a
// task ID along with a 202 status code. The task ID can be used in a call
// to this endpoint to check the status of a merge task.
//
// ```
// curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
// ```
//
// If the merge task is not yet finished, a PENDING status will be returned.
//
// ```
// HTTP/2 200
//
//	{
//	    "task_status": "PENDING",
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
//	        }
//	    }
//	}
//
// ```
//
// If the merge was successful, a SUCCESS status will be returned.
//
// ```
// HTTP/2 200
//
//	{
//	    "task_status": "SUCCESS",
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
//	        }
//	    },
//	    "merge_result": <the merged pull request object>
//	}
//
// ```
//
// If the merge task failed, an error will be returned.
//
// ```
//
//	{
//	    "type": "error",
//	    "error": {
//	        "message": "<error message>"
//	    }
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch - Redirects to the [repository patch](../../patch/%7Bspec%7D)
// with the revspec that corresponds to pull request.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses - Returns all statuses (e.g. build results) for the given pull
// request.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedCommitstatuses
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedCommitstatuses = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugRefs - Returns the branches and tags in the repository.
//
// By default, results will be in the order the underlying source control system returns them and identical to
// the ordering one sees when running "$ git show-ref". Note that this follows simple
// lexical ordering of the ref names.
//
// This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
// sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2",
// "branch10", "v9", "v10", "v11"].
//
// Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
// Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugRefs(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugRefsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugRefsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugRefsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRefs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRefs = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugRefsBranches - Returns a list of all open branches within the specified repository.
//
//	Results will be in the order the source control manager returns them.
//
//	```
//	$ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1 | jq .
//	{
//	  "pagelen": 1,
//	  "size": 187,
//	  "values": [
//	    {
//	      "name": "issue-9.3/AUI-5343-assistive-class",
//	      "links": {
//	        "commits": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/issue-9.3/AUI-5343-assistive-class"
//	        },
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/issue-9.3/AUI-5343-assistive-class"
//	        },
//	        "html": {
//	          "href": "https://bitbucket.org/atlassian/aui/branch/issue-9.3/AUI-5343-assistive-class"
//	        }
//	      },
//	      "default_merge_strategy": "squash",
//	      "merge_strategies": [
//	        "merge_commit",
//	        "squash",
//	        "fast_forward"
//	      ],
//	      "type": "branch",
//	      "target": {
//	        "hash": "e5d1cde9069fcb9f0af90403a4de2150c125a148",
//	        "repository": {
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/atlassian/aui"
//	            },
//	            "avatar": {
//	              "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
//	            }
//	          },
//	          "type": "repository",
//	          "name": "aui",
//	          "full_name": "atlassian/aui",
//	          "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
//	        },
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148"
//	          },
//	          "comments": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/comments"
//	          },
//	          "patch": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e5d1cde9069fcb9f0af90403a4de2150c125a148"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/atlassian/aui/commits/e5d1cde9069fcb9f0af90403a4de2150c125a148"
//	          },
//	          "diff": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e5d1cde9069fcb9f0af90403a4de2150c125a148"
//	          },
//	          "approve": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/approve"
//	          },
//	          "statuses": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/statuses"
//	          }
//	        },
//	        "author": {
//	          "raw": "Marcin Konopka <mkonopka@atlassian.com>",
//	          "type": "author",
//	          "user": {
//	            "display_name": "Marcin Konopka",
//	            "uuid": "{47cc24f4-2a05-4420-88fe-0417535a110a}",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/users/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D/"
//	              },
//	              "avatar": {
//	                "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/MK-1.png"
//	              }
//	            },
//	            "nickname": "Marcin Konopka",
//	            "type": "user",
//	            "account_id": "60113d2b47a9540069f4de03"
//	          }
//	        },
//	        "parents": [
//	          {
//	            "hash": "87f7fc92b00464ae47b13ef65c91884e4ac9be51",
//	            "type": "commit",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/atlassian/aui/commits/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
//	              }
//	            }
//	          }
//	        ],
//	        "date": "2021-04-13T13:44:49+00:00",
//	        "message": "wip
//
// ",
//
//	        "type": "commit"
//	      }
//	    }
//	  ],
//	  "page": 1,
//	  "next": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1&page=2"
//	}
//	```
//
//	Branches support [filtering and sorting](../../../../../meta/filtering)
//	that can be used to search for specific branches. For instance, to find
//	all branches that have "stab" in their name:
//
//	```
//	curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
//	```
//
//	By default, results will be in the order the underlying source control system returns them and identical to
//	the ordering one sees when running "$ hg branches" or "$ git branch --list". Note that this follows simple
//	lexical ordering of the ref names.
//
//	This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
//	sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
//
//	Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
//	Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugRefsBranches(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedBranches
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedBranches = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugRefsBranchesName - Returns a branch object within the specified repository.
//
//	```
//	$ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master | jq .
//	{
//	  "name": "master",
//	  "links": {
//	    "commits": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/master"
//	    },
//	    "self": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master"
//	    },
//	    "html": {
//	      "href": "https://bitbucket.org/atlassian/aui/branch/master"
//	    }
//	  },
//	  "default_merge_strategy": "squash",
//	  "merge_strategies": [
//	    "merge_commit",
//	    "squash",
//	    "fast_forward"
//	  ],
//	  "type": "branch",
//	  "target": {
//	    "hash": "e7d158ff7ed5538c28f94cd97a9ad569680fc94e",
//	    "repository": {
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
//	        },
//	        "html": {
//	          "href": "https://bitbucket.org/atlassian/aui"
//	        },
//	        "avatar": {
//	          "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
//	        }
//	      },
//	      "type": "repository",
//	      "name": "aui",
//	      "full_name": "atlassian/aui",
//	      "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
//	    },
//	    "links": {
//	      "self": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
//	      },
//	      "comments": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/comments"
//	      },
//	      "patch": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
//	      },
//	      "html": {
//	        "href": "https://bitbucket.org/atlassian/aui/commits/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
//	      },
//	      "diff": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
//	      },
//	      "approve": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/approve"
//	      },
//	      "statuses": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/statuses"
//	      }
//	    },
//	    "author": {
//	      "raw": "psre-renovate-bot <psre-renovate-bot@atlassian.com>",
//	      "type": "author",
//	      "user": {
//	        "display_name": "psre-renovate-bot",
//	        "uuid": "{250a442a-3ab3-4fcb-87c3-3c8f3df65ec7}",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/users/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D/"
//	          },
//	          "avatar": {
//	            "href": "https://secure.gravatar.com/avatar/6972ee037c9f36360170a86f544071a2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FP-3.png"
//	          }
//	        },
//	        "nickname": "Renovate Bot",
//	        "type": "user",
//	        "account_id": "5d5355e8c6b9320d9ea5b28d"
//	      }
//	    },
//	    "parents": [
//	      {
//	        "hash": "eab868a309e75733de80969a7bed1ec6d4651e06",
//	        "type": "commit",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/eab868a309e75733de80969a7bed1ec6d4651e06"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/atlassian/aui/commits/eab868a309e75733de80969a7bed1ec6d4651e06"
//	          }
//	        }
//	      }
//	    ],
//	    "date": "2021-04-12T06:44:38+00:00",
//	    "message": "Merged in issue/NONE-renovate-master-babel-monorepo (pull request #2883)
//
// chore(deps): update babel monorepo to v7.13.15 (master)
//
// Approved-by: Chris "Daz" Darroch
// ",
//
//	    "type": "commit"
//	  }
//	}
//	```
//
//	This call requires authentication. Private repositories require the
//	caller to authenticate with an account that has appropriate
//	authorization.
//
//	For Git, the branch name should not include any prefixes (e.g.
//	refs/heads).
func (s *SDK) GetRepositoriesWorkspaceRepoSlugRefsBranchesName(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest) (*operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Branch = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugRefsTags - Returns the tags in the repository.
//
// By default, results will be in the order the underlying source control system returns them and identical to
// the ordering one sees when running "$ hg tags" or "$ git tag --list". Note that this follows simple
// lexical ordering of the ref names.
//
// This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
// sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
//
// Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
// Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugRefsTags(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugRefsTagsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugRefsTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugRefsTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTags
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTags = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugRefsTagsName - Returns the specified tag.
//
// ```
// $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
//
//	{
//	  "name": "3.8",
//	  "links": {
//	    "commits": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
//	    },
//	    "self": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
//	    },
//	    "html": {
//	      "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
//	    }
//	  },
//	  "tagger": {
//	    "raw": "Matt Mackall <mpm@selenic.com>",
//	    "type": "author",
//	    "user": {
//	      "username": "mpmselenic",
//	      "nickname": "mpmselenic",
//	      "display_name": "Matt Mackall",
//	      "type": "user",
//	      "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
//	        },
//	        "html": {
//	          "href": "https://bitbucket.org/mpmselenic/"
//	        },
//	        "avatar": {
//	          "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
//	        }
//	      }
//	    }
//	  },
//	  "date": "2016-05-01T18:52:25+00:00",
//	  "message": "Added tag 3.8 for changeset f85de28eae32",
//	  "type": "tag",
//	  "target": {
//	    "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069",
//	    "repository": {
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
//	        },
//	        "html": {
//	          "href": "https://bitbucket.org/seanfarley/hg"
//	        },
//	        "avatar": {
//	          "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
//	        }
//	      },
//	      "type": "repository",
//	      "name": "hg",
//	      "full_name": "seanfarley/hg",
//	      "uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}"
//	    },
//	    "links": {
//	      "self": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
//	      },
//	      "comments": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
//	      },
//	      "patch": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
//	      },
//	      "html": {
//	        "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
//	      },
//	      "diff": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
//	      },
//	      "approve": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
//	      },
//	      "statuses": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
//	      }
//	    },
//	    "author": {
//	      "raw": "Sean Farley <sean@farley.io>",
//	      "type": "author",
//	      "user": {
//	        "username": "seanfarley",
//	        "nickname": "seanfarley",
//	        "display_name": "Sean Farley",
//	        "type": "user",
//	        "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/users/seanfarley"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/seanfarley/"
//	          },
//	          "avatar": {
//	            "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
//	          }
//	        }
//	      }
//	    },
//	    "parents": [
//	      {
//	        "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2",
//	        "type": "commit",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
//	          }
//	        }
//	      }
//	    ],
//	    "date": "2016-05-01T04:21:17+00:00",
//	    "message": "debian: alphabetize build deps",
//	    "type": "commit"
//	  }
//	}
//
// ```
func (s *SDK) GetRepositoriesWorkspaceRepoSlugRefsTagsName(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest) (*operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Tag = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugSrc - This endpoint redirects the client to the directory listing of the
// root directory on the main branch.
//
// This is equivalent to directly hitting
// [/2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}](src/%7Bcommit%7D/%7Bpath%7D)
// without having to know the name or SHA1 of the repo's main branch.
//
// To create new commits, [POST to this endpoint](#post)
func (s *SDK) GetRepositoriesWorkspaceRepoSlugSrc(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugSrcRequest) (*operations.GetRepositoriesWorkspaceRepoSlugSrcResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/src", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugSrcResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTreeentries
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTreeentries = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugSrcCommitPath - This endpoints is used to retrieve the contents of a single file,
// or the contents of a directory at a specified revision.
//
// ## Raw file contents
//
// When `path` points to a file, this endpoint returns the raw contents.
// The response's Content-Type is derived from the filename
// extension (not from the contents). The file contents are not processed
// and no character encoding/recoding is performed and as a result no
// character encoding is included as part of the Content-Type.
//
// The `Content-Disposition` header will be "attachment" to prevent
// browsers from running executable files.
//
// If the file is managed by LFS, then a 301 redirect pointing to
// Atlassian's media services platform is returned.
//
// The response includes an ETag that is based on the contents of the file
// and its attributes. This means that an empty `__init__.py` always
// returns the same ETag, regardless on the directory it lives in, or the
// commit it is on.
//
// ## File meta data
//
// When the request for a file path includes the query parameter
// `?format=meta`, instead of returning the file's raw contents, Bitbucket
// instead returns the JSON object describing the file's properties:
//
// ```javascript
// $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests/__init__.py?format=meta
//
//	{
//	  "links": {
//	    "self": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
//	    },
//	    "meta": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
//	    }
//	  },
//	  "path": "tests/__init__.py",
//	  "commit": {
//	    "type": "commit",
//	    "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
//	    "links": {
//	      "self": {
//	        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
//	      },
//	      "html": {
//	        "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
//	      }
//	    }
//	  },
//	  "attributes": [],
//	  "type": "commit_file",
//	  "size": 0
//	}
//
// ```
//
// File objects contain an `attributes` element that contains a list of
// possible modifiers. Currently defined values are:
//
//   - `link` -- indicates that the entry is a symbolic link. The contents
//     of the file represent the path the link points to.
//   - `executable` -- indicates that the file has the executable bit set.
//   - `subrepository` -- indicates that the entry points to a submodule or
//     subrepo. The contents of the file is the SHA1 of the repository
//     pointed to.
//   - `binary` -- indicates whether Bitbucket thinks the file is binary.
//
// This endpoint can provide an alternative to how a HEAD request can be
// used to check for the existence of a file, or a file's size without
// incurring the overhead of receiving its full contents.
//
// ## Directory listings
//
// When `path` points to a directory instead of a file, the response is a
// paginated list of directory and file objects in the same order as the
// underlying SCM system would return them.
//
// For example:
//
// ```javascript
// $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "path": "tests/test_project",
//	      "type": "commit_directory",
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
//	        },
//	        "meta": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
//	        }
//	      },
//	      "commit": {
//	        "type": "commit",
//	        "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
//	          }
//	        }
//	      }
//	    },
//	    {
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
//	        },
//	        "meta": {
//	          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
//	        }
//	      },
//	      "path": "tests/__init__.py",
//	      "commit": {
//	        "type": "commit",
//	        "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
//	          },
//	          "html": {
//	            "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
//	          }
//	        }
//	      },
//	      "attributes": [],
//	      "type": "commit_file",
//	      "size": 0
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// When listing the contents of the repo's root directory, the use of a
// trailing slash at the end of the URL is required.
//
// The response by default is not recursive, meaning that only the direct contents of
// a path are returned. The response does not recurse down into
// subdirectories. In order to "walk" the entire directory tree, the
// client can either parse each response and follow the `self` links of each
// `commit_directory` object, or can specify a `max_depth` to recurse to.
//
// The max_depth parameter will do a breadth-first search to return the contents of the subdirectories
// up to the depth specified. Breadth-first search was chosen as it leads to the least amount of
// file system operations for git. If the `max_depth` parameter is specified to be too
// large, the call will time out and return a 555.
//
// Each returned object is either a `commit_file`, or a `commit_directory`,
// both of which contain a `path` element. This path is the absolute path
// from the root of the repository. Each object also contains a `commit`
// object which embeds the commit the file is on. Note that this is merely
// the commit that was used in the URL. It is *not* the commit that last
// modified the file.
//
// Directory objects have 2 representations. Their `self` link returns the
// paginated contents of the directory. The `meta` link on the other hand
// returns the actual `directory` object itself, e.g.:
//
// ```javascript
//
//	{
//	  "path": "tests/test_project",
//	  "type": "commit_directory",
//	  "links": {
//	    "self": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
//	    },
//	    "meta": {
//	      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
//	    }
//	  },
//	  "commit": { ... }
//	}
//
// ```
//
// ## Querying, filtering and sorting
//
// Like most API endpoints, this API supports the Bitbucket
// querying/filtering syntax and so you could filter a directory listing
// to only include entries that match certain criteria. For instance, to
// list all binary files over 1kb use the expression:
//
// `size > 1024 and attributes = "binary"`
//
// which after urlencoding yields the query string:
//
// `?q=size%3E1024+and+attributes%3D%22binary%22`
//
// To change the ordering of the response, use the `?sort` parameter:
//
// `.../src/eefd5ef/?sort=-size`
//
// See [filtering and sorting](../../../../../../meta/filtering) for more
// details.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugSrcCommitPath(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest) (*operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/src/{commit}/{path}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTreeentries
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTreeentries = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugVersions - Returns the versions that have been defined in the issue tracker.
//
// This resource is only available on repositories that have the issue
// tracker enabled.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugVersions(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/versions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedVersions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedVersions = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugVersionsVersionID - Returns the specified issue tracker version object.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugVersionsVersionID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/versions/{version_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Version = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugWatchers - Returns a paginated list of all the watchers on the specified
// repository.
func (s *SDK) GetRepositoriesWorkspaceRepoSlugWatchers(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugWatchersRequest) (*operations.GetRepositoriesWorkspaceRepoSlugWatchersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/watchers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugWatchersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetSnippets - Returns all snippets. Like pull requests, repositories and workspaces, the
// full set of snippets is defined by what the current user has access to.
//
// This includes all snippets owned by any of the workspaces the user is a member of,
// or snippets by other users that the current user is either watching or has collaborated
// on (for instance by commenting on it).
//
// To limit the set of returned snippets, apply the
// `?role=[owner|contributor|member]` query parameter where the roles are
// defined as follows:
//
// * `owner`: all snippets owned by the current user
// * `contributor`: all snippets owned by, or watched by the current user
// * `member`: created in a workspaces or watched by the current user
//
// When no role is specified, all public snippets are returned, as well as all
// privately owned snippets watched or commented on.
//
// The returned response is a normal paginated JSON list. This endpoint
// only supports `application/json` responses and no
// `multipart/form-data` or `multipart/related`. As a result, it is not
// possible to include the file contents.
func (s *SDK) GetSnippets(ctx context.Context, request operations.GetSnippetsRequest) (*operations.GetSnippetsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/snippets"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedSnippets
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedSnippets = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspace - Identical to [`/snippets`](../snippets), except that the result is further filtered
// by the snippet owner and only those that are owned by `{workspace}` are
// returned.
func (s *SDK) GetSnippetsWorkspace(ctx context.Context, request operations.GetSnippetsWorkspaceRequest) (*operations.GetSnippetsWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedSnippets
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedSnippets = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedID - Retrieves a single snippet.
//
// Snippets support multiple content types:
//
// * application/json
// * multipart/related
// * multipart/form-data
//
// application/json
// ----------------
//
// The default content type of the response is `application/json`.
// Since JSON is always `utf-8`, it cannot reliably contain file contents
// for files that are not text. Therefore, JSON snippet documents only
// contain the filename and links to the file contents.
//
// This means that in order to retrieve all parts of a snippet, N+1
// requests need to be made (where N is the number of files in the
// snippet).
//
// multipart/related
// -----------------
//
// To retrieve an entire snippet in a single response, use the
// `Accept: multipart/related` HTTP request header.
//
//	$ curl -H "Accept: multipart/related" https://api.bitbucket.org/2.0/snippets/evzijst/1
//
// Response:
//
//	HTTP/1.1 200 OK
//	Content-Length: 2214
//	Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
//	MIME-Version: 1.0
//
//	--===============1438169132528273974==
//	Content-Type: application/json; charset="utf-8"
//	MIME-Version: 1.0
//	Content-ID: snippet
//
//	{
//	  "links": {
//	    "self": {
//	      "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj"
//	    },
//	    "html": {
//	      "href": "https://bitbucket.org/snippets/evzijst/kypj"
//	    },
//	    "comments": {
//	      "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments"
//	    },
//	    "watchers": {
//	      "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers"
//	    },
//	    "commits": {
//	      "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits"
//	    }
//	  },
//	  "id": kypj,
//	  "title": "My snippet",
//	  "created_on": "2014-12-29T22:22:04.790331+00:00",
//	  "updated_on": "2014-12-29T22:22:04.790331+00:00",
//	  "is_private": false,
//	  "files": {
//	    "foo.txt": {
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt"
//	        },
//	        "html": {
//	          "href": "https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt"
//	        }
//	      }
//	    },
//	    "image.png": {
//	      "links": {
//	        "self": {
//	          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png"
//	        },
//	        "html": {
//	          "href": "https://bitbucket.org/snippets/evzijst/kypj#file-image.png"
//	        }
//	      }
//	    }
//	  ],
//	  "owner": {
//	    "username": "evzijst",
//	    "nickname": "evzijst",
//	    "display_name": "Erik van Zijst",
//	    "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
//	    "links": {
//	      "self": {
//	        "href": "https://api.bitbucket.org/2.0/users/evzijst"
//	      },
//	      "html": {
//	        "href": "https://bitbucket.org/evzijst"
//	      },
//	      "avatar": {
//	        "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
//	      }
//	    }
//	  },
//	  "creator": {
//	    "username": "evzijst",
//	    "nickname": "evzijst",
//	    "display_name": "Erik van Zijst",
//	    "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
//	    "links": {
//	      "self": {
//	        "href": "https://api.bitbucket.org/2.0/users/evzijst"
//	      },
//	      "html": {
//	        "href": "https://bitbucket.org/evzijst"
//	      },
//	      "avatar": {
//	        "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
//	      }
//	    }
//	  }
//	}
//
//	--===============1438169132528273974==
//	Content-Type: text/plain; charset="us-ascii"
//	MIME-Version: 1.0
//	Content-Transfer-Encoding: 7bit
//	Content-ID: "foo.txt"
//	Content-Disposition: attachment; filename="foo.txt"
//
//	foo
//
//	--===============1438169132528273974==
//	Content-Type: image/png
//	MIME-Version: 1.0
//	Content-Transfer-Encoding: base64
//	Content-ID: "image.png"
//	Content-Disposition: attachment; filename="image.png"
//
//	iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
//	TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
//	cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
//	EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
//	73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
//	AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
//	--===============1438169132528273974==--
//
// multipart/form-data
// -------------------
//
// As with creating new snippets, `multipart/form-data` can be used as an
// alternative to `multipart/related`. However, the inherently flat
// structure of form-data means that only basic, root-level properties
// can be returned, while nested elements like `links` are omitted:
//
//	$ curl -H "Accept: multipart/form-data" https://api.bitbucket.org/2.0/snippets/evzijst/kypj
//
// Response:
//
//	HTTP/1.1 200 OK
//	Content-Length: 951
//	Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
//
//	------------------------------63a4b224c59f
//	Content-Disposition: form-data; name="title"
//	Content-Type: text/plain; charset="utf-8"
//
//	My snippet
//	------------------------------63a4b224c59f--
//	Content-Disposition: attachment; name="file"; filename="foo.txt"
//	Content-Type: text/plain
//
//	foo
//
//	------------------------------63a4b224c59f
//	Content-Disposition: attachment; name="file"; filename="image.png"
//	Content-Transfer-Encoding: base64
//	Content-Type: application/octet-stream
//
//	iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
//	TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
//	cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
//	EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
//	73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
//	AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
//	------------------------------5957323a6b76--
func (s *SDK) GetSnippetsWorkspaceEncodedID(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDRequest) (*operations.GetSnippetsWorkspaceEncodedIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Snippet = out
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 410:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDComments - Used to retrieve a paginated list of all comments for a specific
// snippet.
//
// This resource works identical to commit and pull request comments.
//
// The default sorting is oldest to newest and can be overridden with
// the `sort` query parameter.
func (s *SDK) GetSnippetsWorkspaceEncodedIDComments(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDCommentsRequest) (*operations.GetSnippetsWorkspaceEncodedIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedSnippetComments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedSnippetComments = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDCommentsCommentID - Returns the specific snippet comment.
func (s *SDK) GetSnippetsWorkspaceEncodedIDCommentsCommentID(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDCommentsCommentIDRequest) (*operations.GetSnippetsWorkspaceEncodedIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SnippetComment = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDCommits - Returns the changes (commits) made on this snippet.
func (s *SDK) GetSnippetsWorkspaceEncodedIDCommits(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDCommitsRequest) (*operations.GetSnippetsWorkspaceEncodedIDCommitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/commits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDCommitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedSnippetCommit
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedSnippetCommit = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDCommitsRevision - Returns the changes made on this snippet in this commit.
func (s *SDK) GetSnippetsWorkspaceEncodedIDCommitsRevision(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDCommitsRevisionRequest) (*operations.GetSnippetsWorkspaceEncodedIDCommitsRevisionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/commits/{revision}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDCommitsRevisionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SnippetCommit = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDFilesPath - Convenience resource for getting to a snippet's raw files without the
// need for first having to retrieve the snippet itself and having to pull
// out the versioned file links.
func (s *SDK) GetSnippetsWorkspaceEncodedIDFilesPath(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDFilesPathRequest) (*operations.GetSnippetsWorkspaceEncodedIDFilesPathResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/files/{path}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDFilesPathResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDNodeID - Identical to `GET /snippets/encoded_id`, except that this endpoint
// can be used to retrieve the contents of the snippet as it was at an
// older revision, while `/snippets/encoded_id` always returns the
// snippet's current revision.
//
// Note that only the snippet's file contents are versioned, not its
// meta data properties like the title.
//
// Other than that, the two endpoints are identical in behavior.
func (s *SDK) GetSnippetsWorkspaceEncodedIDNodeID(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDNodeIDRequest) (*operations.GetSnippetsWorkspaceEncodedIDNodeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDNodeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Snippet = out
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDNodeIDFilesPath - Retrieves the raw contents of a specific file in the snippet. The
// `Content-Disposition` header will be "attachment" to avoid issues with
// malevolent executable files.
//
// The file's mime type is derived from its filename and returned in the
// `Content-Type` header.
//
// Note that for text files, no character encoding is included as part of
// the content type.
func (s *SDK) GetSnippetsWorkspaceEncodedIDNodeIDFilesPath(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDNodeIDFilesPathRequest) (*operations.GetSnippetsWorkspaceEncodedIDNodeIDFilesPathResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDNodeIDFilesPathResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDRevisionDiff - Returns the diff of the specified commit against its first parent.
//
// Note that this resource is different in functionality from the `patch`
// resource.
//
// The differences between a diff and a patch are:
//
//   - patches have a commit header with the username, message, etc
//   - diffs support the optional `path=foo/bar.py` query param to filter the
//     diff to just that one file diff (not supported for patches)
//   - for a merge, the diff will show the diff between the merge commit and
//     its first parent (identical to how PRs work), while patch returns a
//     response containing separate patches for each commit on the second
//     parent's ancestry, up to the oldest common ancestor (identical to
//     its reachability).
//
// Note that the character encoding of the contents of the diff is
// unspecified as Git does not track this, making it hard for
// Bitbucket to reliably determine this.
func (s *SDK) GetSnippetsWorkspaceEncodedIDRevisionDiff(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDRevisionDiffRequest) (*operations.GetSnippetsWorkspaceEncodedIDRevisionDiffResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/{revision}/diff", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDRevisionDiffResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDRevisionPatch - Returns the patch of the specified commit against its first
// parent.
//
// Note that this resource is different in functionality from the `diff`
// resource.
//
// The differences between a diff and a patch are:
//
//   - patches have a commit header with the username, message, etc
//   - diffs support the optional `path=foo/bar.py` query param to filter the
//     diff to just that one file diff (not supported for patches)
//   - for a merge, the diff will show the diff between the merge commit and
//     its first parent (identical to how PRs work), while patch returns a
//     response containing separate patches for each commit on the second
//     parent's ancestry, up to the oldest common ancestor (identical to
//     its reachability).
//
// Note that the character encoding of the contents of the patch is
// unspecified as Git does not track this, making it hard for
// Bitbucket to reliably determine this.
func (s *SDK) GetSnippetsWorkspaceEncodedIDRevisionPatch(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDRevisionPatchRequest) (*operations.GetSnippetsWorkspaceEncodedIDRevisionPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/{revision}/patch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDRevisionPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDWatch - Used to check if the current user is watching a specific snippet.
//
// Returns 204 (No Content) if the user is watching the snippet and 404 if
// not.
//
// Hitting this endpoint anonymously always returns a 404.
func (s *SDK) GetSnippetsWorkspaceEncodedIDWatch(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDWatchRequest) (*operations.GetSnippetsWorkspaceEncodedIDWatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/watch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDWatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetSnippetsWorkspaceEncodedIDWatchers - Returns a paginated list of all users watching a specific snippet.
func (s *SDK) GetSnippetsWorkspaceEncodedIDWatchers(ctx context.Context, request operations.GetSnippetsWorkspaceEncodedIDWatchersRequest) (*operations.GetSnippetsWorkspaceEncodedIDWatchersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/watchers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSnippetsWorkspaceEncodedIDWatchersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeams - Returns all the teams that the authenticated user is associated
// with.
//
// **This endpoint has been deprecated,
// and you should use the [workspaces](./workspaces) endpoint.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeams(ctx context.Context, request operations.GetTeamsRequest) (*operations.GetTeamsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/teams"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTeams
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTeams = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsername - Gets the public information associated with a team.
//
// If the team's profile is private, `location`, `website` and
// `created_on` elements are omitted.
//
// **This endpoint has been deprecated,
// and you should use the [workspace](../workspaces/%7Bworkspace%7D) endpoint.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsUsername(ctx context.Context, request operations.GetTeamsUsernameRequest) (*operations.GetTeamsUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Team = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameFollowers - Returns the list of accounts that are following this team.
//
// **This endpoint has been deprecated. There is no workspaces replacement.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsUsernameFollowers(ctx context.Context, request operations.GetTeamsUsernameFollowersRequest) (*operations.GetTeamsUsernameFollowersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/followers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameFollowersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameFollowing - Returns the list of accounts this team is following.
//
// **This endpoint has been deprecated. There is no workspaces replacement.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsUsernameFollowing(ctx context.Context, request operations.GetTeamsUsernameFollowingRequest) (*operations.GetTeamsUsernameFollowingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/following", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameFollowingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsUsernameHooks(ctx context.Context, request operations.GetTeamsUsernameHooksRequest) (*operations.GetTeamsUsernameHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWebhookSubscriptions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWebhookSubscriptions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameHooksUID - Returns the webhook with the specified id installed on the given
// team account.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsUsernameHooksUID(ctx context.Context, request operations.GetTeamsUsernameHooksUIDRequest) (*operations.GetTeamsUsernameHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameMembers - Returns all members of the specified team. Any member of any of the
// team's groups is considered a member of the team. This includes users
// in groups that may not actually have access to any of the team's
// repositories.
//
// **This operation has been deprecated due to privacy changes.
// See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/)
// for details.
// You should this [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint as a replacement.**
func (s *SDK) GetTeamsUsernameMembers(ctx context.Context, request operations.GetTeamsUsernameMembersRequest) (*operations.GetTeamsUsernameMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/members", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.User = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernamePermissions - Returns an object for each team permission a user on the team has.
//
// **This endpoint has been deprecated,
// and you should use the [workspace permissions](../../workspaces/%7Bworkspace%7D/permissions) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// Permissions returned are effective permissions — if a user is a member of
// multiple groups with distinct roles, only the highest level is returned.
//
// Permissions can be:
//
// * `admin`
// * `collaborator`
//
// Only users with admin permission for the team may access this resource.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "permission": "admin",
//	      "type": "team_permission",
//	      "user": {
//	        "type": "user",
//	        "nickname": "evzijst",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "team": {
//	        "display_name": "Atlassian Bitbucket",
//	        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
//	      }
//	    },
//	    {
//	      "permission": "collaborator",
//	      "type": "team_permission",
//	      "user": {
//	        "type": "user",
//	        "nickname": "seanaty",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "team": {
//	        "display_name": "Atlassian Bitbucket",
//	        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
//	      }
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../meta/filtering) by
// team, user, or permission by adding the following query string
// parameters:
//
// * `q=user.uuid="{d301aafa-d676-4ee0-88be-962be7417567}"` or `q=permission="admin"`
// * `sort=team.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetTeamsUsernamePermissions(ctx context.Context, request operations.GetTeamsUsernamePermissionsRequest) (*operations.GetTeamsUsernamePermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/permissions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernamePermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTeamPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTeamPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernamePermissionsRepositories - Returns an object for each repository permission for all of a
// team’s repositories.
//
// **This endpoint has been deprecated,
// and you should use the [workspace repository permissions](../../../workspaces/%7Bworkspace%7D/permissions/repositories) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// If the username URL parameter refers to a user account instead of
// a team account, an object containing the repository permissions
// of all the username's repositories will be returned.
//
// Permissions returned are effective permissions — the highest level of
// permission the user has. This does not include public repositories that
// users are not granted any specific permission in, and does not
// distinguish between direct and indirect privileges.
//
// Only users with admin permission for the team may access this resource.
//
// Permissions can be:
//
// * `admin`
// * `write`
// * `read`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "admin"
//	    },
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "write"
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../../meta/filtering)
// by repository, user, or permission by adding the following query string
// parameters:
//
// * `q=repository.name="geordi"` or `q=permission>"read"`
// * `sort=user.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetTeamsUsernamePermissionsRepositories(ctx context.Context, request operations.GetTeamsUsernamePermissionsRepositoriesRequest) (*operations.GetTeamsUsernamePermissionsRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/permissions/repositories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernamePermissionsRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositoryPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositoryPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernamePermissionsRepositoriesRepoSlug - Returns an object for each repository permission of a given repository.
//
// **This endpoint has been deprecated,
// and you should use the [workspace repository permissions](../../../../workspaces/%7Bworkspace%7D/permissions/repositories/%7Brepo_slug%7D) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// If the username URL parameter refers to a user account instead of
// a team account, an object containing the repository permissions
// of the username's repository will be returned.
//
// Permissions returned are effective permissions — the highest level of
// permission the user has. This does not include public repositories that
// users are not granted any specific permission in, and does not
// distinguish between direct and indirect privileges.
//
// Only users with admin permission for the repository may access this resource.
//
// Permissions can be:
//
// * `admin`
// * `write`
// * `read`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "admin"
//	    },
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "write"
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../../meta/filtering)
// by user, or permission by adding the following query string parameters:
//
// * `q=permission>"read"`
// * `sort=user.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetTeamsUsernamePermissionsRepositoriesRepoSlug(ctx context.Context, request operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest) (*operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/permissions/repositories/{repo_slug}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositoryPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositoryPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameProjects - **This endpoint has been deprecated,
// and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsUsernameProjects(ctx context.Context, request operations.GetTeamsUsernameProjectsRequest) (*operations.GetTeamsUsernameProjectsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/projects/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameProjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedProjects
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedProjects = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
// and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsUsernameProjectsProjectKey(ctx context.Context, request operations.GetTeamsUsernameProjectsProjectKeyRequest) (*operations.GetTeamsUsernameProjectsProjectKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/projects/{project_key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameProjectsProjectKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsWorkspaceRepositories - All repositories in the given workspace. This includes any private
// repositories the calling user has access to.
//
// **This endpoint has been deprecated,
// and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
// For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetTeamsWorkspaceRepositories(ctx context.Context, request operations.GetTeamsWorkspaceRepositoriesRequest) (*operations.GetTeamsWorkspaceRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{workspace}/repositories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsWorkspaceRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUser - Returns the currently logged in user.
func (s *SDK) GetUser(ctx context.Context, request operations.GetUserRequest) (*operations.GetUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.User = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUserEmails - Returns all the authenticated user's email addresses. Both
// confirmed and unconfirmed.
func (s *SDK) GetUserEmails(ctx context.Context, request operations.GetUserEmailsRequest) (*operations.GetUserEmailsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/emails"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserEmailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUserEmailsEmail - Returns details about a specific one of the authenticated user's
// email addresses.
//
// Details describe whether the address has been confirmed by the user and
// whether it is the user's primary address or not.
func (s *SDK) GetUserEmailsEmail(ctx context.Context, request operations.GetUserEmailsEmailRequest) (*operations.GetUserEmailsEmailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/emails/{email}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserEmailsEmailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUserPermissionsRepositories - Returns an object for each repository the caller has explicit access
// to and their effective permission — the highest level of permission the
// caller has. This does not return public repositories that the user was
// not granted any specific permission in, and does not distinguish between
// direct and indirect privileges.
//
// Permissions can be:
//
// * `admin`
// * `write`
// * `read`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/user/permissions/repositories
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "nickname": "evzijst",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "admin"
//	    }
//	  ],
//	  "page": 1,
//	  "size": 1
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../meta/filtering) by
// repository or permission by adding the following query string
// parameters:
//
// * `q=repository.name="geordi"` or `q=permission>"read"`
// * `sort=repository.name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetUserPermissionsRepositories(ctx context.Context, request operations.GetUserPermissionsRepositoriesRequest) (*operations.GetUserPermissionsRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/permissions/repositories"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserPermissionsRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositoryPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositoryPermissions = out
		}
	}

	return res, nil
}

// GetUserPermissionsTeams - Returns an object for each team the caller is a member of, and their
// effective role — the highest level of privilege the caller has. If a
// user is a member of multiple groups with distinct roles, only the
// highest level is returned.
//
// **This endpoint has been deprecated,
// and you should use the [workspace permissions](./workspaces) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// Permissions can be:
//
// * `admin`
// * `collaborator`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/user/permissions/teams
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "permission": "admin",
//	      "type": "team_permission",
//	      "user": {
//	        "type": "user",
//	        "nickname": "evzijst",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "team": {
//	        "display_name": "Atlassian Bitbucket",
//	        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
//	      }
//	    }
//	  ],
//	  "page": 1,
//	  "size": 1
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../meta/filtering) by
// team or permission by adding the following query string parameters:
//
// * `q=team.uuid="{4cc6108a-a241-4db0-96a5-64347ac04f87}"` or `q=permission="admin"`
// * `sort=team.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetUserPermissionsTeams(ctx context.Context, request operations.GetUserPermissionsTeamsRequest) (*operations.GetUserPermissionsTeamsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/permissions/teams"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserPermissionsTeamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTeamPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTeamPermissions = out
		}
	}

	return res, nil
}

// GetUserPermissionsWorkspaces - Returns an object for each workspace the caller is a member of, and
// their effective role - the highest level of privilege the caller has.
// If a user is a member of multiple groups with distinct roles, only the
// highest level is returned.
//
// Permissions can be:
//
// * `owner`
// * `collaborator`
// * `member`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/user/permissions/workspaces
//
//	{
//	  "pagelen": 10,
//	  "page": 1,
//	  "size": 1,
//	  "values": [
//	    {
//	      "type": "workspace_membership",
//	      "permission": "owner",
//	      "last_accessed": "2019-03-07T12:35:02.900024+00:00",
//	      "added_on": "2018-10-11T17:42:02.961424+00:00",
//	      "user": {
//	        "type": "user",
//	        "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
//	        "nickname": "evzijst",
//	        "display_name": "Erik van Zijst",
//	      },
//	      "workspace": {
//	        "type": "workspace",
//	        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
//	        "slug": "bbworkspace1",
//	        "name": "Atlassian Bitbucket",
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../meta/filtering) by
// workspace or permission by adding the following query string parameters:
//
// * `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
// * `sort=workspace.slug`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetUserPermissionsWorkspaces(ctx context.Context, request operations.GetUserPermissionsWorkspacesRequest) (*operations.GetUserPermissionsWorkspacesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/permissions/workspaces"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserPermissionsWorkspacesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWorkspaceMemberships
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWorkspaceMemberships = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersSelectedUser - Gets the public information associated with a user account.
//
// If the user's profile is private, `location`, `website` and
// `created_on` elements are omitted.
//
// Note that the user object returned by this operation is changing significantly, due to privacy changes.
// See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
func (s *SDK) GetUsersSelectedUser(ctx context.Context, request operations.GetUsersSelectedUserRequest) (*operations.GetUsersSelectedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersSelectedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.User = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersSelectedUserHooks - Returns a paginated list of webhooks installed on this user account.
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetUsersSelectedUserHooks(ctx context.Context, request operations.GetUsersSelectedUserHooksRequest) (*operations.GetUsersSelectedUserHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersSelectedUserHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWebhookSubscriptions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWebhookSubscriptions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersSelectedUserHooksUID - Returns the webhook with the specified id installed on the given
// user account.
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetUsersSelectedUserHooksUID(ctx context.Context, request operations.GetUsersSelectedUserHooksUIDRequest) (*operations.GetUsersSelectedUserHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersSelectedUserHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersSelectedUserSearchCode - Search for code in the repositories of the specified user.
//
// Searching across all repositories:
//
// ```
// curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 2,
//	      "content_matches": [
//	        {
//	          "lines": [
//	            {
//	              "line": 2,
//	              "segments": []
//	            },
//	            {
//	              "line": 3,
//	              "segments": [
//	                {
//	                  "text": "def "
//	                },
//	                {
//	                  "text": "foo",
//	                  "match": true
//	                },
//	                {
//	                  "text": "():"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 4,
//	              "segments": [
//	                {
//	                  "text": "    print(\"snek\")"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 5,
//	              "segments": []
//	            }
//	          ]
//	        }
//	      ],
//	      "path_matches": [
//	        {
//	          "text": "src/"
//	        },
//	        {
//	          "text": "foo",
//	          "match": true
//	        },
//	        {
//	          "text": ".py"
//	        }
//	      ],
//	      "file": {
//	        "path": "src/foo.py",
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        }
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Note that searches can match in the file's text (`content_matches`),
// the path (`path_matches`), or both as in the example above.
//
// You can use the same syntax for the search query as in the UI, e.g.
// to only search within a specific repository:
//
// ```
// curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo+repo:demo'
// # results from the "demo" repository
// ```
//
// Similar to other APIs, you can request more fields using a
// `fields` query parameter. E.g. to get some more information about
// the repository of matched files (the `%2B` is a URL-encoded `+`):
//
// ```
//
//	curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code'\
//	     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 1,
//	      "content_matches": [...],
//	      "path_matches": [...],
//	      "file": {
//	        "commit": {
//	          "type": "commit",
//	          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            }
//	          },
//	          "repository": {
//	            "name": "demo",
//	            "type": "repository",
//	            "full_name": "my-workspace/demo",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/my-workspace/demo"
//	              },
//	              "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
//	              }
//	            },
//	            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
//	          }
//	        },
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        },
//	        "path": "src/foo.py"
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
func (s *SDK) GetUsersSelectedUserSearchCode(ctx context.Context, request operations.GetUsersSelectedUserSearchCodeRequest) (*operations.GetUsersSelectedUserSearchCodeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/search/code", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersSelectedUserSearchCodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchResultPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchResultPage = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersSelectedUserSSHKeys - Returns a paginated list of the user's SSH public keys.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
//
//	{
//	    "page": 1,
//	    "pagelen": 10,
//	    "size": 1,
//	    "values": [
//	        {
//	            "comment": "user@myhost",
//	            "created_on": "2018-03-14T13:17:05.196003+00:00",
//	            "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
//	            "label": "",
//	            "last_used": "2018-03-20T13:18:05.196003+00:00",
//	            "links": {
//	                "self": {
//	                    "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
//	                }
//	            },
//	            "owner": {
//	                "display_name": "Mark Adams",
//	                "links": {
//	                    "avatar": {
//	                        "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/markadams-atl/"
//	                    },
//	                    "self": {
//	                        "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
//	                    }
//	                },
//	                "type": "user",
//	                "username": "markadams-atl",
//	                "nickname": "markadams-atl",
//	                "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
//	            },
//	            "type": "ssh_key",
//	            "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
//	        }
//	    ]
//	}
//
// ```
func (s *SDK) GetUsersSelectedUserSSHKeys(ctx context.Context, request operations.GetUsersSelectedUserSSHKeysRequest) (*operations.GetUsersSelectedUserSSHKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/ssh-keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersSelectedUserSSHKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedSSHUserKeys
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedSSHUserKeys = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersSelectedUserSSHKeysKeyID - Returns a specific SSH public key belonging to a user.
//
// Example:
// ```
// $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}
//
//	{
//	    "comment": "user@myhost",
//	    "created_on": "2018-03-14T13:17:05.196003+00:00",
//	    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
//	    "label": "",
//	    "last_used": "2018-03-20T13:18:05.196003+00:00",
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
//	        }
//	    },
//	    "owner": {
//	        "display_name": "Mark Adams",
//	        "links": {
//	            "avatar": {
//	                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
//	            },
//	            "html": {
//	                "href": "https://bitbucket.org/markadams-atl/"
//	            },
//	            "self": {
//	                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
//	            }
//	        },
//	        "type": "user",
//	        "username": "markadams-atl",
//	        "nickname": "markadams-atl",
//	        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
//	    },
//	    "type": "ssh_key",
//	    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
//	}
//
// ```
func (s *SDK) GetUsersSelectedUserSSHKeysKeyID(ctx context.Context, request operations.GetUsersSelectedUserSSHKeysKeyIDRequest) (*operations.GetUsersSelectedUserSSHKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/ssh-keys/{key_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersSelectedUserSSHKeysKeyIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SSHAccountKey = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersUsernameMembers - **This endpoint has been deprecated,
// and you should use the [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetUsersUsernameMembers(ctx context.Context, request operations.GetUsersUsernameMembersRequest) (*operations.GetUsersUsernameMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/members", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersUsernameMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.User = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUsersWorkspaceRepositories - All repositories in the given workspace. This includes any private
// repositories the calling user has access to.
//
// **This endpoint has been deprecated,
// and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
// For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) GetUsersWorkspaceRepositories(ctx context.Context, request operations.GetUsersWorkspaceRepositoriesRequest) (*operations.GetUsersWorkspaceRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{workspace}/repositories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersWorkspaceRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspaces - Returns a list of workspaces accessible by the authenticated user.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/workspaces
//
//	{
//	  "pagelen": 10,
//	  "page": 1,
//	  "size": 1,
//	  "values": [
//	    {
//	        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
//	        "links": {
//	            "owners": {
//	                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
//	            },
//	            "self": {
//	                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
//	            },
//	            "repositories": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
//	            },
//	            "snippets": {
//	                "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
//	            },
//	            "html": {
//	                "href": "https://bitbucket.org/bbworkspace1/"
//	            },
//	            "avatar": {
//	                "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
//	            },
//	            "members": {
//	                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
//	            },
//	            "projects": {
//	                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
//	            }
//	        },
//	        "created_on": "2018-11-14T19:15:05.058566+00:00",
//	        "type": "workspace",
//	        "slug": "bbworkspace1",
//	        "is_private": true,
//	        "name": "Atlassian Bitbucket"
//	    }
//	  ]
//	}
//
// ```
//
// Results may be further [filtered or sorted](../meta/filtering) by
// workspace or permission by adding the following query string parameters:
//
// * `q=slug="bbworkspace1"` or `q=is_private=true`
// * `sort=created_on`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetWorkspaces(ctx context.Context, request operations.GetWorkspacesRequest) (*operations.GetWorkspacesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/workspaces"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWorkspaces
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWorkspaces = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspace - Returns the requested workspace.
func (s *SDK) GetWorkspacesWorkspace(ctx context.Context, request operations.GetWorkspacesWorkspaceRequest) (*operations.GetWorkspacesWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Workspace = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspaceHooks - Returns a paginated list of webhooks installed on this workspace.
func (s *SDK) GetWorkspacesWorkspaceHooks(ctx context.Context, request operations.GetWorkspacesWorkspaceHooksRequest) (*operations.GetWorkspacesWorkspaceHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWebhookSubscriptions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWebhookSubscriptions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspaceHooksUID - Returns the webhook with the specified id installed on the given
// workspace.
func (s *SDK) GetWorkspacesWorkspaceHooksUID(ctx context.Context, request operations.GetWorkspacesWorkspaceHooksUIDRequest) (*operations.GetWorkspacesWorkspaceHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspaceMembers - Returns all members of the requested workspace.
func (s *SDK) GetWorkspacesWorkspaceMembers(ctx context.Context, request operations.GetWorkspacesWorkspaceMembersRequest) (*operations.GetWorkspacesWorkspaceMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/members", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWorkspaceMemberships
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWorkspaceMemberships = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspaceMembersMember - Returns the workspace membership, which includes
// a `User` object for the member and a `Workspace` object
// for the requested workspace.
func (s *SDK) GetWorkspacesWorkspaceMembersMember(ctx context.Context, request operations.GetWorkspacesWorkspaceMembersMemberRequest) (*operations.GetWorkspacesWorkspaceMembersMemberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/members/{member}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceMembersMemberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WorkspaceMembership = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspacePermissions - Returns the list of members in a workspace
// and their permission levels.
// Permission can be:
// * `owner`
// * `collaborator`
// * `member`
//
// Example:
//
// ```
// $ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions
//
//	{
//	    "pagelen": 10,
//	    "values": [
//	        {
//	            "permission": "owner",
//	            "type": "workspace_membership",
//	            "user": {
//	                "type": "user",
//	                "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
//	                "display_name": "Erik van Zijst",
//	            },
//	            "workspace": {
//	                "type": "workspace",
//	                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
//	                "slug": "bbworkspace1",
//	                "name": "Atlassian Bitbucket",
//	            }
//	        },
//	        {
//	            "permission": "member",
//	            "type": "workspace_membership",
//	            "user": {
//	                "type": "user",
//	                "nickname": "seanaty",
//	                "display_name": "Sean Conaty",
//	                "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	            },
//	            "workspace": {
//	                "type": "workspace",
//	                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
//	                "slug": "bbworkspace1",
//	                "name": "Atlassian Bitbucket",
//	            }
//	        }
//	    ],
//	    "page": 1,
//	    "size": 2
//	}
//
// ```
//
// Results may be further [filtered](../../../meta/filtering) by
// permission by adding the following query string parameters:
//
// * `q=permission="owner"`
func (s *SDK) GetWorkspacesWorkspacePermissions(ctx context.Context, request operations.GetWorkspacesWorkspacePermissionsRequest) (*operations.GetWorkspacesWorkspacePermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/permissions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspacePermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWorkspaceMemberships
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWorkspaceMemberships = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspacePermissionsRepositories - Returns an object for each repository permission for all of a
// workspace's repositories.
//
// Permissions returned are effective permissions: the highest level of
// permission the user has. This does not distinguish between direct and
// indirect (group) privileges.
//
// Only users with admin permission for the team may access this resource.
//
// Permissions can be:
//
// * `admin`
// * `write`
// * `read`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "atlassian_tutorial/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "admin"
//	    },
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "atlassian_tutorial/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "write"
//	    },
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Jeff Zeng",
//	        "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "whee",
//	        "full_name": "atlassian_tutorial/whee",
//	        "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
//	      },
//	      "permission": "admin"
//	    }
//	  ],
//	  "page": 1,
//	  "size": 3
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../../meta/filtering)
// by repository, user, or permission by adding the following query string
// parameters:
//
// * `q=repository.name="geordi"` or `q=permission>"read"`
// * `sort=user.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetWorkspacesWorkspacePermissionsRepositories(ctx context.Context, request operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest) (*operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/permissions/repositories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositoryPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositoryPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug - Returns an object for the repository permission of each user in the
// requested repository.
//
// Permissions returned are effective permissions: the highest level of
// permission the user has. This does not distinguish between direct and
// indirect (group) privileges.
//
// Only users with admin permission for the repository may access this resource.
//
// Permissions can be:
//
// * `admin`
// * `write`
// * `read`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "atlassian_tutorial/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "admin"
//	    },
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "atlassian_tutorial/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "write"
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../../meta/filtering)
// by user, or permission by adding the following query string parameters:
//
// * `q=permission>"read"`
// * `sort=user.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *SDK) GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug(ctx context.Context, request operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest) (*operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/permissions/repositories/{repo_slug}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositoryPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositoryPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

func (s *SDK) GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSON(ctx context.Context, request operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONRequest) (*operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration(ctx context.Context, request operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest) (*operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

// GetWorkspacesWorkspaceProjects - Returns the list of projects in this workspace.
func (s *SDK) GetWorkspacesWorkspaceProjects(ctx context.Context, request operations.GetWorkspacesWorkspaceProjectsRequest) (*operations.GetWorkspacesWorkspaceProjectsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/projects", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceProjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedProjects
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedProjects = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspaceProjectsProjectKey - Returns the requested project.
func (s *SDK) GetWorkspacesWorkspaceProjectsProjectKey(ctx context.Context, request operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest) (*operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/projects/{project_key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspaceSearchCode - Search for code in the repositories of the specified workspace.
//
// Searching across all repositories:
//
// ```
// curl 'https://api.bitbucket.org/2.0/workspaces/workspace_slug_or_uuid/search/code?search_query=foo'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 2,
//	      "content_matches": [
//	        {
//	          "lines": [
//	            {
//	              "line": 2,
//	              "segments": []
//	            },
//	            {
//	              "line": 3,
//	              "segments": [
//	                {
//	                  "text": "def "
//	                },
//	                {
//	                  "text": "foo",
//	                  "match": true
//	                },
//	                {
//	                  "text": "():"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 4,
//	              "segments": [
//	                {
//	                  "text": "    print(\"snek\")"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 5,
//	              "segments": []
//	            }
//	          ]
//	        }
//	      ],
//	      "path_matches": [
//	        {
//	          "text": "src/"
//	        },
//	        {
//	          "text": "foo",
//	          "match": true
//	        },
//	        {
//	          "text": ".py"
//	        }
//	      ],
//	      "file": {
//	        "path": "src/foo.py",
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        }
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Note that searches can match in the file's text (`content_matches`),
// the path (`path_matches`), or both as in the example above.
//
// You can use the same syntax for the search query as in the UI, e.g.
// to only search within a specific repository:
//
// ```
// curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code?search_query=foo+repo:demo'
// # results from the "demo" repository
// ```
//
// Similar to other APIs, you can request more fields using a
// `fields` query parameter. E.g. to get some more information about
// the repository of matched files (the `%2B` is a URL-encoded `+`):
//
// ```
//
//	curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code'\
//	     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 1,
//	      "content_matches": [...],
//	      "path_matches": [...],
//	      "file": {
//	        "commit": {
//	          "type": "commit",
//	          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            }
//	          },
//	          "repository": {
//	            "name": "demo",
//	            "type": "repository",
//	            "full_name": "my-workspace/demo",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/my-workspace/demo"
//	              },
//	              "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
//	              }
//	            },
//	            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
//	          }
//	        },
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        },
//	        "path": "src/foo.py"
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
func (s *SDK) GetWorkspacesWorkspaceSearchCode(ctx context.Context, request operations.GetWorkspacesWorkspaceSearchCodeRequest) (*operations.GetWorkspacesWorkspaceSearchCodeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/search/code", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceSearchCodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchResultPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchResultPage = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostAddonLinkersLinkerKeyValues - Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
// linker of authenticated application.
//
// A linker value lets applications supply values to modify its regular expression.
//
// The base regular expression must use a Bitbucket-specific match group `(?K)`
// which will be translated to `([\w\-]+)`. A value must match this pattern.
//
// [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
func (s *SDK) PostAddonLinkersLinkerKeyValues(ctx context.Context, request operations.PostAddonLinkersLinkerKeyValuesRequest) (*operations.PostAddonLinkersLinkerKeyValuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/addon/linkers/{linker_key}/values", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAddonLinkersLinkerKeyValuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlug - Creates a new repository.
//
// Note: In order to set the project for the newly created repository,
// pass in either the project key or the project UUID as part of the
// request body as shown in the examples below:
//
// ```
//
//	$ curl -X POST -H "Content-Type: application/json" -d '{
//	    "scm": "git",
//	    "project": {
//	        "key": "MARS"
//	    }
//	}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
//
// ```
//
// or
//
// ```
//
//	$ curl -X POST -H "Content-Type: application/json" -d '{
//	    "scm": "git",
//	    "project": {
//	        "key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
//	    }
//	}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
//
// ```
//
// The project must be assigned for all repositories. If the project is not provided,
// the repository is automatically assigned to the oldest project in the workspace.
//
// Note: In the examples above, the workspace ID `teamsinspace`,
// and/or the repository name `hablanding` can be replaced by UUIDs.
func (s *SDK) PostRepositoriesWorkspaceRepoSlug(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugRequest) (*operations.PostRepositoriesWorkspaceRepoSlugResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Repository = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugBranchRestrictions - Creates a new branch restriction rule for a repository.
//
// `kind` describes what will be restricted. Allowed values include:
// `push`, `force`, `delete` and `restrict_merges`.
//
// Different kinds of branch restrictions have different requirements:
//
//   - `push` and `restrict_merges` require `users` and `groups` to be
//     specified. Empty lists are allowed, in which case permission is
//     denied for everybody.
//
// The restriction applies to all branches that match. There are
// two ways to match a branch. It is configured in `branch_match_kind`:
//
//  1. `glob`: Matches a branch against the `pattern`. A `'*'` in
//     `pattern` will expand to match zero or more characters, and every
//     other character matches itself. For example, `'foo*'` will match
//     `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
//     branches.
//  2. `branching_model`: Matches a branch against the repository's
//     branching model. The `branch_type` controls the type of branch
//     to match. Allowed values include: `production`, `development`,
//     `bugfix`, `release`, `feature` and `hotfix`.
//
// The combination of `kind` and match must be unique. This means that
// two `glob` restrictions in a repository cannot have the same `kind` and
// `pattern`. Additionally, two `branching_model` restrictions in a
// repository cannot have the same `kind` and `branch_type`.
//
// `users` and `groups` are lists of users and groups that are except from
// the restriction. They can only be configured in `push` and
// `restrict_merges` restrictions. The `push` restriction stops a user
// pushing to matching branches unless that user is in `users` or is a
// member of a group in `groups`. The `restrict_merges` stops a user
// merging pull requests to matching branches unless that user is in
// `users` or is a member of a group in `groups`. Adding new users or
// groups to an existing restriction should be done via `PUT`.
//
// Note that branch restrictions with overlapping matchers is allowed,
// but the resulting behavior may be surprising.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugBranchRestrictions(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Branchrestriction = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommitCommitApprove - Approve the specified commit as the authenticated user.
//
// This operation is only available to users that have explicit access to
// the repository. In contrast, just the fact that a repository is
// publicly accessible to users does not give them the ability to approve
// commits.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugCommitCommitApprove(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Participant = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommitCommitComments - Creates new comment on the specified commit.
//
// To post a reply to an existing comment, include the `parent.id` field:
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
//	  -X POST -u evzijst \
//	  -H 'Content-Type: application/json' \
//	  -d '{"content": {"raw": "One more thing!"},
//	       "parent": {"id": 5728901}}'
//
// ```
func (s *SDK) PostRepositoriesWorkspaceRepoSlugCommitCommitComments(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild - Creates a new build status against the specified commit.
//
// If the specified key already exists, the existing status object will
// be overwritten.
//
// Example:
//
// ```
//
//	curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
//	    "key": "MY-BUILD",
//	    "state": "SUCCESSFUL",
//	    "description": "42 tests passed",
//	    "url": "https://www.example.org/my-build-result"
//	  }'
//
// ```
//
// When creating a new commit status, you can use a URI template for the URL.
// Templates are URLs that contain variable names that Bitbucket will
// evaluate at runtime whenever the URL is displayed anywhere similar to
// parameter substitution in
// [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
// For example, one could use `https://foo.com/builds/{repository.full_name}`
// which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
// The context variables available are `repository` and `commit`.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commitstatus = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommits - Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
// except that POST allows clients to place the include and exclude
// parameters in the request body to avoid URL length issues.
//
// **Note that this resource does NOT support new commit creation.**
func (s *SDK) PostRepositoriesWorkspaceRepoSlugCommits(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommitsRevision - Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
// except that POST allows clients to place the include and exclude
// parameters in the request body to avoid URL length issues.
//
// **Note that this resource does NOT support new commit creation.**
func (s *SDK) PostRepositoriesWorkspaceRepoSlugCommitsRevision(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugDeployKeys - Create a new deploy key in a repository. Note: If authenticating a deploy key
// with an OAuth consumer, any changes to the OAuth consumer will subsequently
// invalidate the deploy key.
//
// Example:
// ```
// $ curl -XPOST \
// -H "Authorization <auth header>" \
// -H "Content-type: application/json" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
//
//	'{
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
//	    "label": "mydeploykey"
//	}'
//
// Output:
//
//	{
//	    "id": 123,
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	    "label": "mydeploykey",
//	    "type": "deploy_key",
//	    "created_on": "2018-08-15T23:50:59.993890+00:00",
//	    "repository": {
//	        "full_name": "mleu/test",
//	        "name": "test",
//	        "type": "repository",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "links":{
//	        "self":{
//	            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
//	        }
//	    }
//	    "last_used": null,
//	    "comment": "mleu@C02W454JHTD8"
//	}
//
// ```
func (s *SDK) PostRepositoriesWorkspaceRepoSlugDeployKeys(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest) (*operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeployKey = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugDownloads - Upload new download artifacts.
//
// To upload files, perform a `multipart/form-data` POST containing one
// or more `files` fields:
//
//	$ echo Hello World > hello.txt
//	$ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt
//
// When a file is uploaded with the same name as an existing artifact,
// then the existing file will be replaced.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugDownloads(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/downloads", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugForks - Creates a new fork of the specified repository.
//
// ## Forking a repository
//
// To create a fork, specify the workspace explicitly as part of the
// request body:
//
// ```
//
//	$ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \
//	  -H 'Content-Type: application/json' -d '{
//	    "name": "bbql_fork",
//	    "workspace": {
//	      "slug": "atlassian"
//	    }
//	}'
//
// ```
//
// To fork a repository into the same workspace, also specify a new `name`.
//
// When you specify a value for `name`, it will also affect the `slug`.
// The `slug` is reflected in the repository URL of the new fork. It is
// derived from `name` by substituting non-ASCII characters, removes
// whitespace, and changes characters to lower case. For example,
// `My repo` would turn into `my_repo`.
//
// You need contributor access to create new forks within a workspace.
//
// ## Change the properties of a new fork
//
// By default the fork inherits most of its properties from the parent.
// However, since the optional POST body document follows the normal
// `repository` JSON schema and you can override the new fork's
// properties.
//
// Properties that can be overridden include:
//
//   - description
//   - fork_policy
//   - language
//   - mainbranch
//   - is_private (note that a private repo's fork_policy might prohibit
//     the creation of public forks, in which `is_private=False` would fail)
//   - has_issues (to initialize or disable the new repo's issue tracker --
//     note that the actual contents of the parent repository's issue
//     tracker are not copied during forking)
//   - has_wiki (to initialize or disable the new repo's wiki --
//     note that the actual contents of the parent repository's wiki are not
//     copied during forking)
//   - project (when forking into a private project, the fork's `is_private`
//     must be `true`)
//
// Properties that cannot be modified include:
//
// * scm
// * parent
// * full_name
func (s *SDK) PostRepositoriesWorkspaceRepoSlugForks(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugForksRequest) (*operations.PostRepositoriesWorkspaceRepoSlugForksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/forks", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugForksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Repository = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugHooks - Creates a new webhook on the specified repository.
//
// Example:
//
// ```
// $ curl -X POST -u credentials -H 'Content-Type: application/json'
//
//	https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
//	-d '
//	  {
//	    "description": "Webhook Description",
//	    "url": "https://example.com/",
//	    "active": true,
//	    "events": [
//	      "repo:push",
//	      "issue:created",
//	      "issue:updated"
//	    ]
//	  }'
//
// ```
//
// Note that this call requires the webhook scope, as well as any scope
// that applies to the events that the webhook subscribes to. In the
// example above that means: `webhook`, `repository` and `issue`.
//
// Also note that the `url` must properly resolve and cannot be an
// internal, non-routed address.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugHooks(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugHooksRequest) (*operations.PostRepositoriesWorkspaceRepoSlugHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugIssues - Creates a new issue.
//
// This call requires authentication. Private repositories or private
// issue trackers require the caller to authenticate with an account that
// has appropriate authorization.
//
// The authenticated user is used for the issue's `reporter` field.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugIssues(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest) (*operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Issue = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugIssuesExport - A POST request to this endpoint initiates a new background celery task that archives the repo's issues.
//
// For example, you can run:
//
// curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/
// issues/export
//
// When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
// 'Location' response header. This url is the endpoint for where the user can obtain their zip files."
func (s *SDK) PostRepositoriesWorkspaceRepoSlugIssuesExport(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest) (*operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/export", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugIssuesImport - A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
// existing issues will be deleted and replaced by the contents of the imported zip file.
//
// Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
// "archive," which needs to be a file field:
//
// ```
// $ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
// ```
//
// When the import job is accepted, here is example output:
//
// ```
// < HTTP/1.1 202 Accepted
//
//	{
//	    "type": "issue_job_status",
//	    "status": "ACCEPTED",
//	    "phase": "Attachments",
//	    "total": 15,
//	    "count": 0,
//	    "percent": 0
//	}
//
// ```
func (s *SDK) PostRepositoriesWorkspaceRepoSlugIssuesImport(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest) (*operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/import", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IssueJobStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueJobStatus = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments - Upload new issue attachments.
//
// To upload files, perform a `multipart/form-data` POST containing one
// or more file fields.
//
// When a file is uploaded with the same name as an existing attachment,
// then the existing file will be replaced.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges - Makes a change to the specified issue.
//
// For example, to change an issue's state and assignee, create a new
// change object that modifies these fields:
//
// ```
//
//	curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
//	  -s -u evzijst -X POST -H "Content-Type: application/json" \
//	  -d '{
//	    "changes": {
//	      "assignee_account_id": {
//	        "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
//	      },
//	      "state": {
//	        "new": 'resolved"
//	      }
//	    }
//	    "message": {
//	      "raw": "This is now resolved."
//	    }
//	  }'
//
// ```
//
// The above example also includes a custom comment to go alongside the
// change. This comment will also be visible on the issue page in the UI.
//
// The fields of the `changes` object are strings, not objects. This
// allows for immutable change log records, even after user accounts,
// milestones, or other objects recorded in a change entry, get renamed or
// deleted.
//
// The `assignee_account_id` field stores the account id. When POSTing a
// new change and changing the assignee, the client should therefore use
// the user's account_id in the `changes.assignee_account_id.new` field.
//
// This call requires authentication. Private repositories or private
// issue trackers require the caller to authenticate with an account that
// has appropriate authorization.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesRequest) (*operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueChange = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugIssuesIssueIDComments - Creates a new issue comment.
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
//	  -X POST -u evzijst \
//	  -H 'Content-Type: application/json' \
//	  -d '{"content": {"raw": "Lorem ipsum."}}'
//
// ```
func (s *SDK) PostRepositoriesWorkspaceRepoSlugIssuesIssueIDComments(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugPullrequests - Creates a new pull request where the destination repository is
// this repository and the author is the authenticated user.
//
// The minimum required fields to create a pull request are `title` and
// `source`, specified by a branch name.
//
// ```
//
//	curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
//	    -u my-username:my-password \
//	    --request POST \
//	    --header 'Content-Type: application/json' \
//	    --data '{
//	        "title": "My Title",
//	        "source": {
//	            "branch": {
//	                "name": "staging"
//	            }
//	        }
//	    }'
//
// ```
//
// If the pull request's `destination` is not specified, it will default
// to the `repository.mainbranch`. To open a pull request to a
// different branch, say from a feature branch to a staging branch,
// specify a `destination` (same format as the `source`):
//
// ```
//
//	{
//	    "title": "My Title",
//	    "source": {
//	        "branch": {
//	            "name": "my-feature-branch"
//	        }
//	    },
//	    "destination": {
//	        "branch": {
//	            "name": "staging"
//	        }
//	    }
//	}
//
// ```
//
// Reviewers can be specified by adding an array of user objects as the
// `reviewers` property.
//
// ```
//
//	{
//	    "title": "My Title",
//	    "source": {
//	        "branch": {
//	            "name": "my-feature-branch"
//	        }
//	    },
//	    "reviewers": [
//	        {
//	            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	        }
//	    ]
//	}
//
// ```
//
// Other fields:
//
// * `description` - a string
// * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
func (s *SDK) PostRepositoriesWorkspaceRepoSlugPullrequests(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove - Approve the specified pull request as the authenticated user.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Participant = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments - Creates a new pull request comment.
//
// Returns the newly created pull request comment.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PullrequestComment = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline - Declines the pull request.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge - Merges the pull request.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

func (s *SDK) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Participant = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugRefsBranches - Creates a new branch in the specified repository.
//
// The payload of the POST should consist of a JSON document that
// contains the name of the tag and the target hash.
//
// ```
// curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
// -s -u seanfarley -X POST -H "Content-Type: application/json" \
//
//	-d '{
//	    "name" : "smf/create-feature",
//	    "target" : {
//	        "hash" : "default",
//	    }
//	}'
//
// ```
//
// This call requires authentication. Private repositories require the
// caller to authenticate with an account that has appropriate
// authorization.
//
// The branch name should not include any prefixes (e.g.
// refs/heads). This endpoint does support using short hash prefixes for
// the commit hash, but it may return a 400 response if the provided
// prefix is ambiguous. Using a full commit hash is the preferred
// approach.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugRefsBranches(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest) (*operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Branch = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugRefsTags - Creates a new tag in the specified repository.
//
// The payload of the POST should consist of a JSON document that
// contains the name of the tag and the target hash.
//
// ```
// curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
// -s -u jdoe -X POST -H "Content-Type: application/json" \
//
//	-d '{
//	    "name" : "new-tag-name",
//	    "target" : {
//	        "hash" : "a1b2c3d4e5f6",
//	    }
//	}'
//
// ```
//
// This endpoint does support using short hash prefixes for the commit
// hash, but it may return a 400 response if the provided prefix is
// ambiguous. Using a full commit hash is the preferred approach.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugRefsTags(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugRefsTagsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugRefsTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugRefsTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Tag = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugSrc - This endpoint is used to create new commits in the repository by
// uploading files.
//
// To add a new file to a repository:
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
//	  -F /repo/path/to/image.png=@image.png
//
// ```
//
// This will create a new commit on top of the main branch, inheriting the
// contents of the main branch, but adding (or overwriting) the
// `image.png` file to the repository in the `/repo/path/to` directory.
//
// To create a commit that deletes files, use the `files` parameter:
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
//	  -F files=/file/to/delete/1.txt \
//	  -F files=/file/to/delete/2.txt
//
// ```
//
// You can add/modify/delete multiple files in a request. Rename/move a
// file by deleting the old path and adding the content at the new path.
//
// This endpoint accepts `multipart/form-data` (as in the examples above),
// as well as `application/x-www-form-urlencoded`.
//
// ## multipart/form-data
//
// A `multipart/form-data` post contains a series of "form fields" that
// identify both the individual files that are being uploaded, as well as
// additional, optional meta data.
//
// Files are uploaded in file form fields (those that have a
// `Content-Disposition` parameter) whose field names point to the remote
// path in the repository where the file should be stored. Path field
// names are always interpreted to be absolute from the root of the
// repository, regardless whether the client uses a leading slash (as the
// above `curl` example did).
//
// File contents are treated as bytes and are not decoded as text.
//
// The commit message, as well as other non-file meta data for the
// request, is sent along as normal form field elements. Meta data fields
// share the same namespace as the file objects. For `multipart/form-data`
// bodies that should not lead to any ambiguity, as the
// `Content-Disposition` header will contain the `filename` parameter to
// distinguish between a file named "message" and the commit message field.
//
// ## application/x-www-form-urlencoded
//
// It is also possible to upload new files using a simple
// `application/x-www-form-urlencoded` POST. This can be convenient when
// uploading pure text files:
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src \
//	  --data-urlencode "/path/to/me.txt=Lorem ipsum." \
//	  --data-urlencode "message=Initial commit" \
//	  --data-urlencode "author=Erik van Zijst <erik.van.zijst@gmail.com>"
//
// ```
//
// There could be a field name clash if a client were to upload a file
// named "message", as this filename clashes with the meta data property
// for the commit message. To avoid this and to upload files whose names
// clash with the meta data properties, use a leading slash for the files,
// e.g. `curl --data-urlencode "/message=file contents"`.
//
// When an explicit slash is omitted for a file whose path matches that of
// a meta data parameter, then it is interpreted as meta data, not as a
// file.
//
// ## Executables and links
//
// While this API aims to facilitate the most common use cases, it is
// possible to perform some more advanced operations like creating a new
// symlink in the repository, or creating an executable file.
//
// Files can be supplied with a `x-attributes` value in the
// `Content-Disposition` header. For example, to upload an executable
// file, as well as create a symlink from `README.txt` to `README`:
//
// ```
// --===============1438169132528273974==
// Content-Type: text/plain; charset="us-ascii"
// MIME-Version: 1.0
// Content-Transfer-Encoding: 7bit
// Content-ID: "bin/shutdown.sh"
// Content-Disposition: attachment; filename="shutdown.sh"; x-attributes:"executable"
//
// #!/bin/sh
// halt
//
// --===============1438169132528273974==
// Content-Type: text/plain; charset="us-ascii"
// MIME-Version: 1.0
// Content-Transfer-Encoding: 7bit
// Content-ID: "/README.txt"
// Content-Disposition: attachment; filename="README.txt"; x-attributes:"link"
//
// README
// --===============1438169132528273974==--
// ```
//
// Links are files that contain the target path and have
// `x-attributes:"link"` set.
//
// When overwriting links with files, or vice versa, the newly uploaded
// file determines both the new contents, as well as the attributes. That
// means uploading a file without specifying `x-attributes="link"` will
// create a regular file, even if the parent commit hosted a symlink at
// the same path.
//
// The same applies to executables. When modifying an existing executable
// file, the form-data file element must include
// `x-attributes="executable"` in order to preserve the executable status
// of the file.
//
// Note that this API does not support the creation or manipulation of
// subrepos / submodules.
func (s *SDK) PostRepositoriesWorkspaceRepoSlugSrc(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugSrcRequest) (*operations.PostRepositoriesWorkspaceRepoSlugSrcResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/src", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugSrcResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostSnippets - Creates a new snippet under the authenticated user's account.
//
// Snippets can contain multiple files. Both text and binary files are
// supported.
//
// The simplest way to create a new snippet from a local file:
//
//	$ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file=@image.png
//
// Creating snippets through curl has a few limitations and so let's look
// at a more complicated scenario.
//
// Snippets are created with a multipart POST. Both `multipart/form-data`
// and `multipart/related` are supported. Both allow the creation of
// snippets with both meta data (title, etc), as well as multiple text
// and binary files.
//
// The main difference is that `multipart/related` can use rich encoding
// for the meta data (currently JSON).
//
// multipart/related (RFC-2387)
// ----------------------------
//
// This is the most advanced and efficient way to create a paste.
//
//	POST /2.0/snippets/evzijst HTTP/1.1
//	Content-Length: 1188
//	Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
//	MIME-Version: 1.0
//
//	--===============1438169132528273974==
//	Content-Type: application/json; charset="utf-8"
//	MIME-Version: 1.0
//	Content-ID: snippet
//
//	{
//	  "title": "My snippet",
//	  "is_private": true,
//	  "scm": "hg",
//	  "files": {
//	      "foo.txt": {},
//	      "image.png": {}
//	    }
//	}
//
//	--===============1438169132528273974==
//	Content-Type: text/plain; charset="us-ascii"
//	MIME-Version: 1.0
//	Content-Transfer-Encoding: 7bit
//	Content-ID: "foo.txt"
//	Content-Disposition: attachment; filename="foo.txt"
//
//	foo
//
//	--===============1438169132528273974==
//	Content-Type: image/png
//	MIME-Version: 1.0
//	Content-Transfer-Encoding: base64
//	Content-ID: "image.png"
//	Content-Disposition: attachment; filename="image.png"
//
//	iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
//	TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
//	cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
//	EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
//	73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
//	AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
//	--===============1438169132528273974==--
//
// The request contains multiple parts and is structured as follows.
//
// The first part is the JSON document that describes the snippet's
// properties or meta data. It either has to be the first part, or the
// request's `Content-Type` header must contain the `start` parameter to
// point to it.
//
// The remaining parts are the files of which there can be zero or more.
// Each file part should contain the `Content-ID` MIME header through
// which the JSON meta data's `files` element addresses it. The value
// should be the name of the file.
//
// `Content-Disposition` is an optional MIME header. The header's
// optional `filename` parameter can be used to specify the file name
// that Bitbucket should use when writing the file to disk. When present,
// `filename` takes precedence over the value of `Content-ID`.
//
// When the JSON body omits the `files` element, the remaining parts are
// not ignored. Instead, each file is added to the new snippet as if its
// name was explicitly linked (the use of the `files` elements is
// mandatory for some operations like deleting or renaming files).
//
// multipart/form-data
// -------------------
//
// The use of JSON for the snippet's meta data is optional. Meta data can
// also be supplied as regular form fields in a more conventional
// `multipart/form-data` request:
//
//	$ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title="My snippet"               -F file=@foo.txt -F file=@image.png
//
//	POST /2.0/snippets HTTP/1.1
//	Content-Length: 951
//	Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
//
//	------------------------------63a4b224c59f
//	Content-Disposition: form-data; name="file"; filename="foo.txt"
//	Content-Type: text/plain
//
//	foo
//
//	------------------------------63a4b224c59f
//	Content-Disposition: form-data; name="file"; filename="image.png"
//	Content-Type: application/octet-stream
//
//	?PNG
//
//	IHDR?1??I.....
//	------------------------------63a4b224c59f
//	Content-Disposition: form-data; name="title"
//
//	My snippet
//	------------------------------63a4b224c59f--
//
// Here the meta data properties are included as flat, top-level form
// fields. The file attachments use the `file` field name. To attach
// multiple files, simply repeat the field.
//
// The advantage of `multipart/form-data` over `multipart/related` is
// that it can be easier to build clients.
//
// Essentially all properties are optional, `title` and `files` included.
//
// Sharing and Visibility
// ----------------------
//
// Snippets can be either public (visible to anyone on Bitbucket, as well
// as anonymous users), or private (visible only to members of the workspace).
// This is controlled through the snippet's `is_private` element:
//
//   - **is_private=false** -- everyone, including anonymous users can view
//     the snippet
//   - **is_private=true** -- only workspace members can view the snippet
//
// To create the snippet under a workspace, just append the workspace ID
// to the URL. See [`/2.0/snippets/{workspace}`](./snippets/%7Bworkspace%7D#post).
func (s *SDK) PostSnippets(ctx context.Context, request operations.PostSnippetsRequest) (*operations.PostSnippetsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/snippets"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSnippetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Snippet = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostSnippetsWorkspace - Identical to [`/snippets`](../snippets#post), except that the new snippet will be
// created under the workspace specified in the path parameter
// `{workspace}`.
func (s *SDK) PostSnippetsWorkspace(ctx context.Context, request operations.PostSnippetsWorkspaceRequest) (*operations.PostSnippetsWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSnippetsWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Snippet = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostSnippetsWorkspaceEncodedIDComments - Creates a new comment.
//
// The only required field in the body is `content.raw`.
//
// To create a threaded reply to an existing comment, include `parent.id`.
func (s *SDK) PostSnippetsWorkspaceEncodedIDComments(ctx context.Context, request operations.PostSnippetsWorkspaceEncodedIDCommentsRequest) (*operations.PostSnippetsWorkspaceEncodedIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSnippetsWorkspaceEncodedIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Snippet = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostTeamsUsernameHooks - Creates a new webhook on the specified team.
//
// Team webhooks are fired for events from all repositories belonging to
// that team account.
//
// Note that only admins can install webhooks on teams.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) PostTeamsUsernameHooks(ctx context.Context, request operations.PostTeamsUsernameHooksRequest) (*operations.PostTeamsUsernameHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostTeamsUsernameHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostTeamsUsernameProjects - Creates a new project.
//
// **This endpoint has been deprecated,
// and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#post) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// Note that the avatar has to be embedded as either a data-url
// or a URL to an external image as shown in the examples below:
//
// ```
// $ body=$(cat << EOF
//
//	{
//	    "name": "Mars Project",
//	    "key": "MARS",
//	    "description": "Software for colonizing mars.",
//	    "links": {
//	        "avatar": {
//	            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
//	        }
//	    },
//	    "is_private": false
//	}
//
// EOF
// )
//
//	$ curl -H "Content-Type: application/json" \
//	       -X POST \
//	       -d "$body" \
//	       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
//
//	{
//	  // Serialized project document
//	}
//
// ```
//
// or even:
//
// ```
// $ body=$(cat << EOF
//
//	{
//	    "name": "Mars Project",
//	    "key": "MARS",
//	    "description": "Software for colonizing mars.",
//	    "links": {
//	        "avatar": {
//	            "href": "http://i.imgur.com/72tRx4w.gif"
//	        }
//	    },
//	    "is_private": false
//	}
//
// EOF
// )
//
//	$ curl -H "Content-Type: application/json" \
//	       -X POST \
//	       -d "$body" \
//	       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
//
//	{
//	  // Serialized project document
//	}
//
// ```
func (s *SDK) PostTeamsUsernameProjects(ctx context.Context, request operations.PostTeamsUsernameProjectsRequest) (*operations.PostTeamsUsernameProjectsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/projects/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostTeamsUsernameProjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostUsersSelectedUserHooks - Creates a new webhook on the specified user account.
//
// Account-level webhooks are fired for events from all repositories
// belonging to that account.
//
// Note that one can only register webhooks on one's own account, not that
// of others.
//
// Also, note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) PostUsersSelectedUserHooks(ctx context.Context, request operations.PostUsersSelectedUserHooksRequest) (*operations.PostUsersSelectedUserHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostUsersSelectedUserHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostUsersSelectedUserSSHKeys - Adds a new SSH public key to the specified user account and returns the resulting key.
//
// Example:
// ```
// $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
//
//	{
//	    "comment": "user@myhost",
//	    "created_on": "2018-03-14T13:17:05.196003+00:00",
//	    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
//	    "label": "",
//	    "last_used": "2018-03-20T13:18:05.196003+00:00",
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
//	        }
//	    },
//	    "owner": {
//	        "display_name": "Mark Adams",
//	        "links": {
//	            "avatar": {
//	                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
//	            },
//	            "html": {
//	                "href": "https://bitbucket.org/markadams-atl/"
//	            },
//	            "self": {
//	                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
//	            }
//	        },
//	        "type": "user",
//	        "username": "markadams-atl",
//	        "nickname": "markadams-atl",
//	        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
//	    },
//	    "type": "ssh_key",
//	    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
//	}
//
// ```
func (s *SDK) PostUsersSelectedUserSSHKeys(ctx context.Context, request operations.PostUsersSelectedUserSSHKeysRequest) (*operations.PostUsersSelectedUserSSHKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/ssh-keys", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostUsersSelectedUserSSHKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SSHAccountKey = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostWorkspacesWorkspaceHooks - Creates a new webhook on the specified workspace.
//
// Workspace webhooks are fired for events from all repositories contained
// by that workspace.
//
// Note that only owners can install webhooks on workspaces.
func (s *SDK) PostWorkspacesWorkspaceHooks(ctx context.Context, request operations.PostWorkspacesWorkspaceHooksRequest) (*operations.PostWorkspacesWorkspaceHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostWorkspacesWorkspaceHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostWorkspacesWorkspaceProjects - Creates a new project.
//
// Note that the avatar has to be embedded as either a data-url
// or a URL to an external image as shown in the examples below:
//
// ```
// $ body=$(cat << EOF
//
//	{
//	    "name": "Mars Project",
//	    "key": "MARS",
//	    "description": "Software for colonizing mars.",
//	    "links": {
//	        "avatar": {
//	            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
//	        }
//	    },
//	    "is_private": false
//	}
//
// EOF
// )
//
//	$ curl -H "Content-Type: application/json" \
//	       -X POST \
//	       -d "$body" \
//	       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
//
//	{
//	  // Serialized project document
//	}
//
// ```
//
// or even:
//
// ```
// $ body=$(cat << EOF
//
//	{
//	    "name": "Mars Project",
//	    "key": "MARS",
//	    "description": "Software for colonizing mars.",
//	    "links": {
//	        "avatar": {
//	            "href": "http://i.imgur.com/72tRx4w.gif"
//	        }
//	    },
//	    "is_private": false
//	}
//
// EOF
// )
//
//	$ curl -H "Content-Type: application/json" \
//	       -X POST \
//	       -d "$body" \
//	       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
//
//	{
//	  // Serialized project document
//	}
//
// ```
func (s *SDK) PostWorkspacesWorkspaceProjects(ctx context.Context, request operations.PostWorkspacesWorkspaceProjectsRequest) (*operations.PostWorkspacesWorkspaceProjectsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/projects", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostWorkspacesWorkspaceProjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutAddon - Updates the application installation for the user.
//
// This endpoint is intended to be used by Bitbucket Connect apps
// and only supports JWT authentication -- that is how Bitbucket
// identifies the particular installation of the app. Developers
// with applications registered in the "Develop Apps" section
// of Bitbucket Marketplace need not use this endpoint as
// updates for those applications can be sent out via the
// UI of that section.
//
// A new, valid descriptor must be provided in the body of the
// PUT request.
//
// ```
//
//	$ curl -X PUT https://api.bitbucket.org/2.0/addon \
//	  -H "Authorization: JWT <JWT Token>" \
//	  --header "Content-Type: application/json" \
//	  --data '{"descriptor": $NEW_DESCRIPTOR}'
//
// ```
//
// Note that the scopes of the application cannot be increased
// in the new descriptor nor reduced to none.
func (s *SDK) PutAddon(ctx context.Context, request operations.PutAddonRequest) (*operations.PutAddonResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/addon"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutAddonResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutAddonLinkersLinkerKeyValues - Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
// linker of the authenticated application.
//
// A linker value lets applications supply values to modify its regular expression.
//
// The base regular expression must use a Bitbucket-specific match group `(?K)`
// which will be translated to `([\w\-]+)`. A value must match this pattern.
//
// [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
func (s *SDK) PutAddonLinkersLinkerKeyValues(ctx context.Context, request operations.PutAddonLinkersLinkerKeyValuesRequest) (*operations.PutAddonLinkersLinkerKeyValuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/addon/linkers/{linker_key}/values", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutAddonLinkersLinkerKeyValuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlug - Since this endpoint can be used to both update and to create a
// repository, the request body depends on the intent.
//
// ### Creation
//
// See the POST documentation for the repository endpoint for an example
// of the request body.
//
// ### Update
//
// Note: Changing the `name` of the repository will cause the location to
// be changed. This is because the URL of the repo is derived from the
// name (a process called slugification). In such a scenario, it is
// possible for the request to fail if the newly created slug conflicts
// with an existing repository's slug. But if there is no conflict,
// the new location will be returned in the `Location` header of the
// response.
func (s *SDK) PutRepositoriesWorkspaceRepoSlug(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugRequest) (*operations.PutRepositoriesWorkspaceRepoSlugResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Repository = out
		}
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Repository = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugBranchRestrictionsID - Updates an existing branch restriction rule.
//
// Fields not present in the request body are ignored.
//
// See [`POST`](../branch-restrictions#post) for details.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugBranchRestrictionsID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Branchrestriction = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugBranchingModelSettings - Update the branching model configuration for a repository.
//
// The `development` branch can be configured to a specific branch or to
// track the main branch. When set to a specific branch it must
// currently exist. Only the passed properties will be updated. The
// properties not passed will be left unchanged. A request without a
// `development` property will leave the development branch unchanged.
//
// It is possible for the `development` branch to be invalid. This
// happens when it points at a specific branch that has been
// deleted. This is indicated in the `is_valid` field for the branch. It is
// not possible to update the settings for `development` if that
// would leave the branch in an invalid state. Such a request will be
// rejected.
//
// The `production` branch can be a specific branch, the main
// branch or disabled. When set to a specific branch it must currently
// exist. The `enabled` property can be used to enable (`true`) or
// disable (`false`) it. Only the passed properties will be updated. The
// properties not passed will be left unchanged. A request without a
// `production` property will leave the production branch unchanged.
//
// It is possible for the `production` branch to be invalid. This
// happens when it points at a specific branch that has been
// deleted. This is indicated in the `is_valid` field for the branch. A
// request that would leave `production` enabled and invalid will be
// rejected. It is possible to update `production` and make it invalid if
// it would also be left disabled.
//
// The `branch_types` property contains the branch types to be updated.
// Only the branch types passed will be updated. All updates will be
// rejected if it would leave the branching model in an invalid state.
// For branch types this means that:
//
//  1. The prefixes for all enabled branch types are valid. For example,
//     it is not possible to use '*' inside a Git prefix.
//  2. A prefix of an enabled branch type must not be a prefix of another
//     enabled branch type. This is to ensure that a branch can be easily
//     classified by its prefix unambiguously.
//
// It is possible to store an invalid prefix if that branch type would be
// left disabled. Only the passed properties will be updated. The
// properties not passed will be left unchanged. Each branch type must
// have a `kind` property to identify it.
//
// Example Body:
//
// ```
//
//	{
//	  "development": {
//	    "use_mainbranch": true
//	  },
//	  "production": {
//	    "enabled": true,
//	    "use_mainbranch": false,
//	    "name": "production"
//	  },
//	  "branch_types": [
//	    {
//	      "kind": "bugfix",
//	      "enabled": true,
//	      "prefix": "bugfix/"
//	    },
//	    {
//	      "kind": "feature",
//	      "enabled": true,
//	      "prefix": "feature/"
//	    },
//	    {
//	      "kind": "hotfix",
//	      "prefix": "hotfix/"
//	    },
//	    {
//	      "kind": "release",
//	      "enabled": false,
//	    }
//	  ]
//	}
//
// ```
func (s *SDK) PutRepositoriesWorkspaceRepoSlugBranchingModelSettings(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest) (*operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BranchingModelSettings = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Used to update the current status of a build status object on the
// specific commit.
//
// This operation can also be used to change other properties of the
// build status:
//
// * `state`
// * `name`
// * `description`
// * `url`
// * `refname`
//
// The `key` cannot be changed.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest) (*operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commitstatus = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Adds the specified user to the repository's list of default
// reviewers.
//
// This method is idempotent. Adding a user a second time has no effect.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) (*operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID - Create a new deploy key in a repository.
//
// The same key needs to be passed in but the comment and label can change.
//
// Example:
// ```
// $ curl -XPUT \
// -H "Authorization <auth header>" \
// -H "Content-type: application/json" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
//
//	'{
//	    "label": "newlabel",
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
//	}'
//
// Output:
//
//	{
//	    "comment": "newcomment",
//	    "last_used": null,
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
//	        }
//	    },
//	    "repository": {
//	        "full_name": "mleu/test",
//	        "name": "test",
//	        "type": "repository",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "label": "newlabel",
//	    "created_on": "2018-08-15T23:50:59.993890+00:00",
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	    "id": 1234,
//	    "type": "deploy_key"
//	}
//
// ```
func (s *SDK) PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeployKey = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
func (s *SDK) PutRepositoriesWorkspaceRepoSlugHooksUID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugHooksUIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugIssuesIssueID - Modifies the issue.
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
//	  -u evzijst -s -X PUT -H 'Content-Type: application/json' \
//	  -d '{
//	  "title": "Updated title",
//	  "assignee": {
//	    "username": "evzijst"
//	  },
//	  "priority": "minor",
//	  "version": {
//	    "name": "1.0"
//	  },
//	  "component": null
//	}'
//
// ```
//
// This example changes the `title`, `assignee`, `priority` and the
// `version`. It also removes the value of the `component` from the issue
// by setting the field to `null`. Any field not present keeps its existing
// value.
//
// Each time an issue is edited in the UI or through the API, an immutable
// change record is created under the `/issues/123/changes` endpoint. It
// also has a comment associated with the change.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugIssuesIssueID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Issue = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID - Updates the content of the specified issue comment. Note that only
// the `content.raw` field can be modified.
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
//	  -X PUT -u evzijst \
//	  -H 'Content-Type: application/json' \
//	  -d '{"content": {"raw": "Lorem ipsum."}'
//
// ```
func (s *SDK) PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IssueComment = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVote - Vote for this issue.
//
// To cast your vote, do an empty PUT. The 204 status code indicates that
// the operation was successful.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVote(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest) (*operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch - Start watching this issue.
//
// To start watching this issue, do an empty PUT. The 204 status code
// indicates that the operation was successful.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest) (*operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID - Mutates the specified pull request.
//
// This can be used to change the pull request's branches or description.
//
// Only open pull requests can be mutated.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID - Updates a specific pull request comment.
func (s *SDK) PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PullrequestComment = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutSnippetsWorkspaceEncodedID - Used to update a snippet. Use this to add and delete files and to
// change a snippet's title.
//
// To update a snippet, one can either PUT a full snapshot, or only the
// parts that need to be changed.
//
// The contract for PUT on this API is that properties missing from the
// request remain untouched so that snippets can be efficiently
// manipulated with differential payloads.
//
// To delete a property (e.g. the title, or a file), include its name in
// the request, but omit its value (use `null`).
//
// As in Git, explicit renaming of files is not supported. Instead, to
// rename a file, delete it and add it again under another name. This can
// be done atomically in a single request. Rename detection is left to
// the SCM.
//
// PUT supports three different content types for both request and
// response bodies:
//
// * `application/json`
// * `multipart/related`
// * `multipart/form-data`
//
// The content type used for the request body can be different than that
// used for the response. Content types are specified using standard HTTP
// headers.
//
// Use the `Content-Type` and `Accept` headers to select the desired
// request and response format.
//
// application/json
// ----------------
//
// As with creation and retrieval, the content type determines what
// properties can be manipulated. `application/json` does not support
// file contents and is therefore limited to a snippet's meta data.
//
// To update the title, without changing any of its files:
//
//	$ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": "Updated title"}'
//
// To delete the title:
//
//	$ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": null}'
//
// Not all parts of a snippet can be manipulated. The owner and creator
// for instance are immutable.
//
// multipart/related
// -----------------
//
// `multipart/related` can be used to manipulate all of a snippet's
// properties. The body is identical to a POST. properties omitted from
// the request are left unchanged. Since the `start` part contains JSON,
// the mechanism for manipulating the snippet's meta data is identical
// to `application/json` requests.
//
// To update one of a snippet's file contents, while also changing its
// title:
//
//	PUT /2.0/snippets/evzijst/kypj HTTP/1.1
//	Content-Length: 288
//	Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
//	MIME-Version: 1.0
//
//	--===============1438169132528273974==
//	Content-Type: application/json; charset="utf-8"
//	MIME-Version: 1.0
//	Content-ID: snippet
//
//	{
//	  "title": "My updated snippet",
//	  "files": {
//	      "foo.txt": {}
//	    }
//	}
//
//	--===============1438169132528273974==
//	Content-Type: text/plain; charset="us-ascii"
//	MIME-Version: 1.0
//	Content-Transfer-Encoding: 7bit
//	Content-ID: "foo.txt"
//	Content-Disposition: attachment; filename="foo.txt"
//
//	Updated file contents.
//
//	--===============1438169132528273974==--
//
// Here only the parts that are changed are included in the body. The
// other files remain untouched.
//
// Note the use of the `files` list in the JSON part. This list contains
// the files that are being manipulated. This list should have
// corresponding multiparts in the request that contain the new contents
// of these files.
//
// If a filename in the `files` list does not have a corresponding part,
// it will be deleted from the snippet, as shown below:
//
//	PUT /2.0/snippets/evzijst/kypj HTTP/1.1
//	Content-Length: 188
//	Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
//	MIME-Version: 1.0
//
//	--===============1438169132528273974==
//	Content-Type: application/json; charset="utf-8"
//	MIME-Version: 1.0
//	Content-ID: snippet
//
//	{
//	  "files": {
//	    "image.png": {}
//	  }
//	}
//
//	--===============1438169132528273974==--
//
// To simulate a rename, delete a file and add the same file under
// another name:
//
//	PUT /2.0/snippets/evzijst/kypj HTTP/1.1
//	Content-Length: 212
//	Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
//	MIME-Version: 1.0
//
//	--===============1438169132528273974==
//	Content-Type: application/json; charset="utf-8"
//	MIME-Version: 1.0
//	Content-ID: snippet
//
//	{
//	    "files": {
//	      "foo.txt": {},
//	      "bar.txt": {}
//	    }
//	}
//
//	--===============1438169132528273974==
//	Content-Type: text/plain; charset="us-ascii"
//	MIME-Version: 1.0
//	Content-Transfer-Encoding: 7bit
//	Content-ID: "bar.txt"
//	Content-Disposition: attachment; filename="bar.txt"
//
//	foo
//
//	--===============1438169132528273974==--
//
// multipart/form-data
// -----------------
//
// Again, one can also use `multipart/form-data` to manipulate file
// contents and meta data atomically.
//
//	$ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title="My updated snippet" -F file=@foo.txt
//
//	PUT /2.0/snippets/evzijst/kypj HTTP/1.1
//	Content-Length: 351
//	Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
//
//	------------------------------63a4b224c59f
//	Content-Disposition: form-data; name="file"; filename="foo.txt"
//	Content-Type: text/plain
//
//	foo
//
//	------------------------------63a4b224c59f
//	Content-Disposition: form-data; name="title"
//
//	My updated snippet
//	------------------------------63a4b224c59f
//
// To delete a file, omit its contents while including its name in the
// `files` field:
//
//	$ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files=image.png
//
//	PUT /2.0/snippets/evzijst/kypj HTTP/1.1
//	Content-Length: 149
//	Content-Type: multipart/form-data; boundary=----------------------------ef8871065a86
//
//	------------------------------ef8871065a86
//	Content-Disposition: form-data; name="files"
//
//	image.png
//	------------------------------ef8871065a86--
//
// The explicit use of the `files` element in `multipart/related` and
// `multipart/form-data` is only required when deleting files.
// The default mode of operation is for file parts to be processed,
// regardless of whether or not they are listed in `files`, as a
// convenience to the client.
func (s *SDK) PutSnippetsWorkspaceEncodedID(ctx context.Context, request operations.PutSnippetsWorkspaceEncodedIDRequest) (*operations.PutSnippetsWorkspaceEncodedIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSnippetsWorkspaceEncodedIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Snippet = out
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutSnippetsWorkspaceEncodedIDCommentsCommentID - Updates a comment.
//
// Comments can only be updated by their author.
func (s *SDK) PutSnippetsWorkspaceEncodedIDCommentsCommentID(ctx context.Context, request operations.PutSnippetsWorkspaceEncodedIDCommentsCommentIDRequest) (*operations.PutSnippetsWorkspaceEncodedIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSnippetsWorkspaceEncodedIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutSnippetsWorkspaceEncodedIDNodeID - Identical to `UPDATE /snippets/encoded_id`, except that this endpoint
// takes an explicit commit revision. Only the snippet's "HEAD"/"tip"
// (most recent) version can be updated and requests on all other,
// older revisions fail by returning a 405 status.
//
// Usage of this endpoint over the unrestricted `/snippets/encoded_id`
// could be desired if the caller wants to be sure no concurrent
// modifications have taken place between the moment of the UPDATE
// request and the original GET.
//
// This can be considered a so-called "Compare And Swap", or CAS
// operation.
//
// Other than that, the two endpoints are identical in behavior.
func (s *SDK) PutSnippetsWorkspaceEncodedIDNodeID(ctx context.Context, request operations.PutSnippetsWorkspaceEncodedIDNodeIDRequest) (*operations.PutSnippetsWorkspaceEncodedIDNodeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSnippetsWorkspaceEncodedIDNodeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Snippet = out
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 405:
		switch {
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/related`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutSnippetsWorkspaceEncodedIDWatch - Used to start watching a specific snippet. Returns 204 (No Content).
func (s *SDK) PutSnippetsWorkspaceEncodedIDWatch(ctx context.Context, request operations.PutSnippetsWorkspaceEncodedIDWatchRequest) (*operations.PutSnippetsWorkspaceEncodedIDWatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/snippets/{workspace}/{encoded_id}/watch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSnippetsWorkspaceEncodedIDWatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutTeamsUsernameHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) PutTeamsUsernameHooksUID(ctx context.Context, request operations.PutTeamsUsernameHooksUIDRequest) (*operations.PutTeamsUsernameHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutTeamsUsernameHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutTeamsUsernameProjectsProjectKey - Since this endpoint can be used to both update and to create a
// project, the request body depends on the intent.
//
// **This endpoint has been deprecated,
// and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#put) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// ### Creation
//
// See the POST documentation for the project collection for an
// example of the request body.
//
// Note: The `key` should not be specified in the body of request
// (since it is already present in the URL). The `name` is required,
// everything else is optional.
//
// ### Update
//
// See the POST documentation for the project collection for an
// example of the request body.
//
// Note: The key is not required in the body (since it is already in
// the URL). The key may be specified in the body, if the intent is
// to change the key itself. In such a scenario, the location of the
// project is changed and is returned in the `Location` header of the
// response.
func (s *SDK) PutTeamsUsernameProjectsProjectKey(ctx context.Context, request operations.PutTeamsUsernameProjectsProjectKeyRequest) (*operations.PutTeamsUsernameProjectsProjectKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/projects/{project_key}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutTeamsUsernameProjectsProjectKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutUsersSelectedUserHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *SDK) PutUsersSelectedUserHooksUID(ctx context.Context, request operations.PutUsersSelectedUserHooksUIDRequest) (*operations.PutUsersSelectedUserHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutUsersSelectedUserHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutUsersSelectedUserSSHKeysKeyID - Updates a specific SSH public key on a user's account
//
// Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.
//
// Example:
// ```
// $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
//
//	{
//	    "comment": "",
//	    "created_on": "2018-03-14T13:17:05.196003+00:00",
//	    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
//	    "label": "Work key",
//	    "last_used": "2018-03-20T13:18:05.196003+00:00",
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
//	        }
//	    },
//	    "owner": {
//	        "display_name": "Mark Adams",
//	        "links": {
//	            "avatar": {
//	                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
//	            },
//	            "html": {
//	                "href": "https://bitbucket.org/markadams-atl/"
//	            },
//	            "self": {
//	                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
//	            }
//	        },
//	        "type": "user",
//	        "username": "markadams-atl",
//	        "nickname": "markadams-atl",
//	        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
//	    },
//	    "type": "ssh_key",
//	    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
//	}
//
// ```
func (s *SDK) PutUsersSelectedUserSSHKeysKeyID(ctx context.Context, request operations.PutUsersSelectedUserSSHKeysKeyIDRequest) (*operations.PutUsersSelectedUserSSHKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/ssh-keys/{key_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutUsersSelectedUserSSHKeysKeyIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SSHAccountKey = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutWorkspacesWorkspaceHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
func (s *SDK) PutWorkspacesWorkspaceHooksUID(ctx context.Context, request operations.PutWorkspacesWorkspaceHooksUIDRequest) (*operations.PutWorkspacesWorkspaceHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutWorkspacesWorkspaceHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutWorkspacesWorkspaceProjectsProjectKey - Since this endpoint can be used to both update and to create a
// project, the request body depends on the intent.
//
// ### Creation
//
// See the POST documentation for the project collection for an
// example of the request body.
//
// Note: The `key` should not be specified in the body of request
// (since it is already present in the URL). The `name` is required,
// everything else is optional.
//
// ### Update
//
// See the POST documentation for the project collection for an
// example of the request body.
//
// Note: The key is not required in the body (since it is already in
// the URL). The key may be specified in the body, if the intent is
// to change the key itself. In such a scenario, the location of the
// project is changed and is returned in the `Location` header of the
// response.
func (s *SDK) PutWorkspacesWorkspaceProjectsProjectKey(ctx context.Context, request operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest) (*operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/projects/{project_key}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Project = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// BulkCreateOrUpdateAnnotations - Bulk upload of annotations.
// Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
//
// Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.
//
// ### Sample cURL request:
// ```
// curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
// --header 'Content-Type: application/json' \
// --data-raw '[
//
//	{
//	      "external_id": "mysystem-annotation001",
//	      "title": "Security scan report",
//	      "annotation_type": "VULNERABILITY",
//	      "summary": "This line represents a security threat.",
//	      "severity": "HIGH",
//	    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
//	      "line": 42
//	},
//	{
//	      "external_id": "mySystem-annotation002",
//	      "title": "Bug report",
//	      "annotation_type": "BUG",
//	      "result": "FAILED",
//	      "summary": "This line might introduce a bug.",
//	      "severity": "MEDIUM",
//	    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
//	      "line": 13
//	}
//
// ]'
// ```
//
// ### Possible field values:
// annotation_type: VULNERABILITY, CODE_SMELL, BUG
// result: PASSED, FAILED, IGNORED, SKIPPED
// severity: HIGH, MEDIUM, LOW, CRITICAL
//
// Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
func (s *SDK) BulkCreateOrUpdateAnnotations(ctx context.Context, request operations.BulkCreateOrUpdateAnnotationsRequest) (*operations.BulkCreateOrUpdateAnnotationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BulkCreateOrUpdateAnnotationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportAnnotations = out
		}
	}

	return res, nil
}

// CreateDeploymentVariable - Create a deployment environment level variable.
func (s *SDK) CreateDeploymentVariable(ctx context.Context, request operations.CreateDeploymentVariableRequest) (*operations.CreateDeploymentVariableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateDeploymentVariableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeploymentVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateEnvironment - Create an environment.
func (s *SDK) CreateEnvironment(ctx context.Context, request operations.CreateEnvironmentRequest) (*operations.CreateEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeploymentEnvironment = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateOrUpdateAnnotation - Creates or updates an individual annotation for the specified report.
// Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
//
// Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
//
// ### Sample cURL request:
// ```
// curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
// --header 'Content-Type: application/json' \
//
//	--data-raw '{
//	    "title": "Security scan report",
//	    "annotation_type": "VULNERABILITY",
//	    "summary": "This line represents a security thread.",
//	    "severity": "HIGH",
//	    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
//	    "line": 42
//	}'
//
// ```
//
// ### Possible field values:
// annotation_type: VULNERABILITY, CODE_SMELL, BUG
// result: PASSED, FAILED, IGNORED, SKIPPED
// severity: HIGH, MEDIUM, LOW, CRITICAL
//
// Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
func (s *SDK) CreateOrUpdateAnnotation(ctx context.Context, request operations.CreateOrUpdateAnnotationRequest) (*operations.CreateOrUpdateAnnotationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateOrUpdateAnnotationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportAnnotation = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateOrUpdateReport - Creates or updates a report for the specified commit.
// To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
//
// ### Sample cURL request:
// ```
// curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
// --header 'Content-Type: application/json' \
//
//	--data-raw '{
//	    "title": "Security scan report",
//	    "details": "This pull request introduces 10 new dependency vulnerabilities.",
//	    "report_type": "SECURITY",
//	    "reporter": "mySystem",
//	    "link": "http://www.mysystem.com/reports/001",
//	    "result": "FAILED",
//	    "data": [
//	        {
//	            "title": "Duration (seconds)",
//	            "type": "DURATION",
//	            "value": 14
//	        },
//	        {
//	            "title": "Safe to merge?",
//	            "type": "BOOLEAN",
//	            "value": false
//	        }
//	    ]
//	}'
//
// ```
//
// ### Possible field values:
// report_type: SECURITY, COVERAGE, TEST, BUG
// result: PASSED, FAILED, PENDING
// data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
//
// #### Data field formats
// | Type  Field   | Value Field Type  | Value Field Display |
// |:--------------|:------------------|:--------------------|
// | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
// | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
// | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
// | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
// | LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
// | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
// | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
// | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
//
// Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
func (s *SDK) CreateOrUpdateReport(ctx context.Context, request operations.CreateOrUpdateReportRequest) (*operations.CreateOrUpdateReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateOrUpdateReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Report = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreatePipelineForRepository - Endpoint to create and initiate a pipeline.
// There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
// # Trigger a Pipeline for a branch
// One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline.
// The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.
//
// ### Example
//
// ```
//
//	$ curl -X POST -is -u username:password \
//	  -H 'Content-Type: application/json' \
//	 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
//	  -d '
//	  {
//	    "target": {
//	      "ref_type": "branch",
//	      "type": "pipeline_ref_target",
//	      "ref_name": "master"
//	    }
//	  }'
//
// ```
// # Trigger a Pipeline for a commit on a branch or tag
// You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
// The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.
//
// The following reference types are supported:
//
// * `branch`
// * `named_branch`
// * `bookmark`
//   - `tag`
//
// ### Example
//
// ```
//
//	$ curl -X POST -is -u username:password \
//	  -H 'Content-Type: application/json' \
//	  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
//	  -d '
//	  {
//	    "target": {
//	      "commit": {
//	        "type": "commit",
//	        "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956"
//	      },
//	      "ref_type": "branch",
//	      "type": "pipeline_ref_target",
//	      "ref_name": "master"
//	    }
//	  }'
//
// ```
// # Trigger a specific pipeline definition for a commit
// You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.
// In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.
//
// ### Example
//
// ```
//
//	$ curl -X POST -is -u username:password \
//	  -H 'Content-Type: application/json' \
//	 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
//	 -d '
//	  {
//	     "target": {
//	      "commit": {
//	         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
//	         "type":"commit"
//	       },
//	        "selector": {
//	           "type":"custom",
//	              "pattern":"Deploy to production"
//	          },
//	        "type":"pipeline_commit_target"
//	   }
//	  }'
//
// ```
// # Trigger a specific pipeline definition for a commit on a branch or tag
// You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.
// In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.
//
// ### Example
//
// ```
//
//	$ curl -X POST -is -u username:password \
//	  -H 'Content-Type: application/json' \
//	 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
//	 -d '
//	  {
//	     "target": {
//	      "commit": {
//	         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
//	         "type":"commit"
//	       },
//	       "selector": {
//	          "type": "custom",
//	          "pattern": "Deploy to production"
//	       },
//	       "type": "pipeline_ref_target",
//	       "ref_name": "master",
//	       "ref_type": "branch"
//	     }
//	  }'
//
// ```
//
// # Trigger a custom pipeline with variables
// In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).
//
// ### Example
//
// ```
//
//	$ curl -X POST -is -u username:password \
//	  -H 'Content-Type: application/json' \
//	 https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
//	 -d '
//	  {
//	    "target": {
//	      "type": "pipeline_ref_target",
//	      "ref_type": "branch",
//	      "ref_name": "master",
//	      "selector": {
//	        "type": "custom",
//	        "pattern": "Deploy to production"
//	      }
//	    },
//	    "variables": [
//	      {
//	        "key": "var1key",
//	        "value": "var1value",
//	        "secured": true
//	      },
//	      {
//	        "key": "var2key",
//	        "value": "var2value"
//	      }
//	    ]
//	  }'
//
// ```
//
// # Trigger a pull request pipeline
//
// You can also initiate a pipeline for a specific pull request.
//
// ### Example
//
// ```
//
//	$ curl -X POST -is -u username:password \
//	  -H 'Content-Type: application/json' \
//	 https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
//	 -d '
//	  {
//		"target": {
//	      "type": "pipeline_pullrequest_target",
//		  "source": "pull-request-branch",
//	      "destination": "master",
//	      "destination_commit": {
//	      	 "hash" : "9f848b7"
//	      },
//	      "commit": {
//	      	"hash" : "1a372fc"
//	      },
//	      "pullrequest" : {
//	      	"id" : "3"
//	      },
//		  "selector": {
//	        "type": "pull-requests",
//	        "pattern": "**"
//	      }
//	    }
//	  }'
//
// ```
func (s *SDK) CreatePipelineForRepository(ctx context.Context, request operations.CreatePipelineForRepositoryRequest) (*operations.CreatePipelineForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreatePipelineForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pipeline = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreatePipelineVariableForTeam - Create an account level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) CreatePipelineVariableForTeam(ctx context.Context, request operations.CreatePipelineVariableForTeamRequest) (*operations.CreatePipelineVariableForTeamResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/pipelines_config/variables/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreatePipelineVariableForTeamResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreatePipelineVariableForUser - Create a user level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) CreatePipelineVariableForUser(ctx context.Context, request operations.CreatePipelineVariableForUserRequest) (*operations.CreatePipelineVariableForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/pipelines_config/variables/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreatePipelineVariableForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreatePipelineVariableForWorkspace - Create a workspace level variable.
func (s *SDK) CreatePipelineVariableForWorkspace(ctx context.Context, request operations.CreatePipelineVariableForWorkspaceRequest) (*operations.CreatePipelineVariableForWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/variables", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreatePipelineVariableForWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateRepositoryPipelineKnownHost - Create a repository level known host.
func (s *SDK) CreateRepositoryPipelineKnownHost(ctx context.Context, request operations.CreateRepositoryPipelineKnownHostRequest) (*operations.CreateRepositoryPipelineKnownHostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateRepositoryPipelineKnownHostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineKnownHost = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateRepositoryPipelineSchedule - Create a schedule for the given repository.
func (s *SDK) CreateRepositoryPipelineSchedule(ctx context.Context, request operations.CreateRepositoryPipelineScheduleRequest) (*operations.CreateRepositoryPipelineScheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateRepositoryPipelineScheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineSchedule = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateRepositoryPipelineVariable - Create a repository level variable.
func (s *SDK) CreateRepositoryPipelineVariable(ctx context.Context, request operations.CreateRepositoryPipelineVariableRequest) (*operations.CreateRepositoryPipelineVariableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateRepositoryPipelineVariableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteAnnotation - Deletes a single Annotation matching the provided ID.
func (s *SDK) DeleteAnnotation(ctx context.Context, request operations.DeleteAnnotationRequest) (*operations.DeleteAnnotationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAnnotationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteCommitHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
func (s *SDK) DeleteCommitHostedPropertyValue(ctx context.Context, request operations.DeleteCommitHostedPropertyValueRequest) (*operations.DeleteCommitHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteCommitHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteDeploymentVariable - Delete a deployment environment level variable.
func (s *SDK) DeleteDeploymentVariable(ctx context.Context, request operations.DeleteDeploymentVariableRequest) (*operations.DeleteDeploymentVariableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteDeploymentVariableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteEnvironmentForRepository - Delete an environment
func (s *SDK) DeleteEnvironmentForRepository(ctx context.Context, request operations.DeleteEnvironmentForRepositoryRequest) (*operations.DeleteEnvironmentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteEnvironmentForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeletePipelineVariableForTeam - Delete a team level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) DeletePipelineVariableForTeam(ctx context.Context, request operations.DeletePipelineVariableForTeamRequest) (*operations.DeletePipelineVariableForTeamResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeletePipelineVariableForTeamResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeletePipelineVariableForUser - Delete an account level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) DeletePipelineVariableForUser(ctx context.Context, request operations.DeletePipelineVariableForUserRequest) (*operations.DeletePipelineVariableForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeletePipelineVariableForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeletePipelineVariableForWorkspace - Delete a workspace level variable.
func (s *SDK) DeletePipelineVariableForWorkspace(ctx context.Context, request operations.DeletePipelineVariableForWorkspaceRequest) (*operations.DeletePipelineVariableForWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeletePipelineVariableForWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeletePullRequestHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
func (s *SDK) DeletePullRequestHostedPropertyValue(ctx context.Context, request operations.DeletePullRequestHostedPropertyValueRequest) (*operations.DeletePullRequestHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeletePullRequestHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteReport - Deletes a single Report matching the provided ID.
func (s *SDK) DeleteReport(ctx context.Context, request operations.DeleteReportRequest) (*operations.DeleteReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteRepositoryHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
func (s *SDK) DeleteRepositoryHostedPropertyValue(ctx context.Context, request operations.DeleteRepositoryHostedPropertyValueRequest) (*operations.DeleteRepositoryHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoryHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteRepositoryPipelineCache - Delete a repository cache.
func (s *SDK) DeleteRepositoryPipelineCache(ctx context.Context, request operations.DeleteRepositoryPipelineCacheRequest) (*operations.DeleteRepositoryPipelineCacheResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoryPipelineCacheResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoryPipelineKeyPair - Delete the repository SSH key pair.
func (s *SDK) DeleteRepositoryPipelineKeyPair(ctx context.Context, request operations.DeleteRepositoryPipelineKeyPairRequest) (*operations.DeleteRepositoryPipelineKeyPairResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoryPipelineKeyPairResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoryPipelineKnownHost - Delete a repository level known host.
func (s *SDK) DeleteRepositoryPipelineKnownHost(ctx context.Context, request operations.DeleteRepositoryPipelineKnownHostRequest) (*operations.DeleteRepositoryPipelineKnownHostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoryPipelineKnownHostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoryPipelineSchedule - Delete a schedule.
func (s *SDK) DeleteRepositoryPipelineSchedule(ctx context.Context, request operations.DeleteRepositoryPipelineScheduleRequest) (*operations.DeleteRepositoryPipelineScheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoryPipelineScheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteRepositoryPipelineVariable - Delete a repository level variable.
func (s *SDK) DeleteRepositoryPipelineVariable(ctx context.Context, request operations.DeleteRepositoryPipelineVariableRequest) (*operations.DeleteRepositoryPipelineVariableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoryPipelineVariableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteUserHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
func (s *SDK) DeleteUserHostedPropertyValue(ctx context.Context, request operations.DeleteUserHostedPropertyValueRequest) (*operations.DeleteUserHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteUserHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetAnnotation - Returns a single Annotation matching the provided ID.
func (s *SDK) GetAnnotation(ctx context.Context, request operations.GetAnnotationRequest) (*operations.GetAnnotationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnnotationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportAnnotation = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetAnnotationsForReport - Returns a paginated list of Annotations for a specified report.
func (s *SDK) GetAnnotationsForReport(ctx context.Context, request operations.GetAnnotationsForReportRequest) (*operations.GetAnnotationsForReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnnotationsForReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedAnnotations
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedAnnotations = out
		}
	}

	return res, nil
}

// GetCommitHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
func (s *SDK) GetCommitHostedPropertyValue(ctx context.Context, request operations.GetCommitHostedPropertyValueRequest) (*operations.GetCommitHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommitHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetDeploymentForRepository - Retrieve a deployment
func (s *SDK) GetDeploymentForRepository(ctx context.Context, request operations.GetDeploymentForRepositoryRequest) (*operations.GetDeploymentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeploymentForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Deployment = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetDeploymentVariables - Find deployment environment level variables.
func (s *SDK) GetDeploymentVariables(ctx context.Context, request operations.GetDeploymentVariablesRequest) (*operations.GetDeploymentVariablesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeploymentVariablesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedDeploymentVariable
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedDeploymentVariable = out
		}
	}

	return res, nil
}

// GetDeploymentsForRepository - Find deployments
func (s *SDK) GetDeploymentsForRepository(ctx context.Context, request operations.GetDeploymentsForRepositoryRequest) (*operations.GetDeploymentsForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeploymentsForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedDeployments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedDeployments = out
		}
	}

	return res, nil
}

// GetEnvironmentForRepository - Retrieve an environment
func (s *SDK) GetEnvironmentForRepository(ctx context.Context, request operations.GetEnvironmentForRepositoryRequest) (*operations.GetEnvironmentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEnvironmentForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeploymentEnvironment = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetEnvironmentsForRepository - Find environments
func (s *SDK) GetEnvironmentsForRepository(ctx context.Context, request operations.GetEnvironmentsForRepositoryRequest) (*operations.GetEnvironmentsForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEnvironmentsForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedEnvironments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedEnvironments = out
		}
	}

	return res, nil
}

// GetPipelineForRepository - Retrieve a specified pipeline
func (s *SDK) GetPipelineForRepository(ctx context.Context, request operations.GetPipelineForRepositoryRequest) (*operations.GetPipelineForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pipeline = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetPipelineStepForRepository - Retrieve a given step of a pipeline.
func (s *SDK) GetPipelineStepForRepository(ctx context.Context, request operations.GetPipelineStepForRepositoryRequest) (*operations.GetPipelineStepForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineStepForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineStep = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetPipelineStepLogForRepository - Retrieve the log file for a given step of a pipeline.
//
// This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
func (s *SDK) GetPipelineStepLogForRepository(ctx context.Context, request operations.GetPipelineStepLogForRepositoryRequest) (*operations.GetPipelineStepLogForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineStepLogForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 416:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetPipelineStepsForRepository - Find steps for the given pipeline.
func (s *SDK) GetPipelineStepsForRepository(ctx context.Context, request operations.GetPipelineStepsForRepositoryRequest) (*operations.GetPipelineStepsForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineStepsForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineSteps
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineSteps = out
		}
	}

	return res, nil
}

// GetPipelineVariableForTeam - Retrieve a team level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) GetPipelineVariableForTeam(ctx context.Context, request operations.GetPipelineVariableForTeamRequest) (*operations.GetPipelineVariableForTeamResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineVariableForTeamResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetPipelineVariableForUser - Retrieve a user level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) GetPipelineVariableForUser(ctx context.Context, request operations.GetPipelineVariableForUserRequest) (*operations.GetPipelineVariableForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineVariableForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetPipelineVariableForWorkspace - Retrieve a workspace level variable.
func (s *SDK) GetPipelineVariableForWorkspace(ctx context.Context, request operations.GetPipelineVariableForWorkspaceRequest) (*operations.GetPipelineVariableForWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineVariableForWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetPipelineVariablesForTeam - Find account level variables.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) GetPipelineVariablesForTeam(ctx context.Context, request operations.GetPipelineVariablesForTeamRequest) (*operations.GetPipelineVariablesForTeamResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/pipelines_config/variables/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineVariablesForTeamResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineVariables
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineVariables = out
		}
	}

	return res, nil
}

// GetPipelineVariablesForUser - Find user level variables.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) GetPipelineVariablesForUser(ctx context.Context, request operations.GetPipelineVariablesForUserRequest) (*operations.GetPipelineVariablesForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/pipelines_config/variables/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineVariablesForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineVariables
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineVariables = out
		}
	}

	return res, nil
}

// GetPipelineVariablesForWorkspace - Find workspace level variables.
func (s *SDK) GetPipelineVariablesForWorkspace(ctx context.Context, request operations.GetPipelineVariablesForWorkspaceRequest) (*operations.GetPipelineVariablesForWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/variables", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelineVariablesForWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineVariables
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineVariables = out
		}
	}

	return res, nil
}

// GetPipelinesForRepository - Find pipelines
func (s *SDK) GetPipelinesForRepository(ctx context.Context, request operations.GetPipelinesForRepositoryRequest) (*operations.GetPipelinesForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPipelinesForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelines
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelines = out
		}
	}

	return res, nil
}

// GetPullRequestHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
func (s *SDK) GetPullRequestHostedPropertyValue(ctx context.Context, request operations.GetPullRequestHostedPropertyValueRequest) (*operations.GetPullRequestHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPullRequestHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetPullrequestsForCommit - Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
func (s *SDK) GetPullrequestsForCommit(ctx context.Context, request operations.GetPullrequestsForCommitRequest) (*operations.GetPullrequestsForCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPullrequestsForCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
		}
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetReport - Returns a single Report matching the provided ID.
func (s *SDK) GetReport(ctx context.Context, request operations.GetReportRequest) (*operations.GetReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Report = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetReportsForCommit - Returns a paginated list of Reports linked to this commit.
func (s *SDK) GetReportsForCommit(ctx context.Context, request operations.GetReportsForCommitRequest) (*operations.GetReportsForCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetReportsForCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedReports
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedReports = out
		}
	}

	return res, nil
}

// GetRepositoryHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
func (s *SDK) GetRepositoryHostedPropertyValue(ctx context.Context, request operations.GetRepositoryHostedPropertyValueRequest) (*operations.GetRepositoryHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetRepositoryPipelineCacheContentURI - Retrieve the URI of the content of the specified cache.
func (s *SDK) GetRepositoryPipelineCacheContentURI(ctx context.Context, request operations.GetRepositoryPipelineCacheContentURIRequest) (*operations.GetRepositoryPipelineCacheContentURIResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineCacheContentURIResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PipelineCacheContentURI
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineCacheContentURI = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineCaches - Retrieve the repository pipelines caches.
func (s *SDK) GetRepositoryPipelineCaches(ctx context.Context, request operations.GetRepositoryPipelineCachesRequest) (*operations.GetRepositoryPipelineCachesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineCachesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineCaches
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineCaches = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineConfig - Retrieve the repository pipelines configuration.
func (s *SDK) GetRepositoryPipelineConfig(ctx context.Context, request operations.GetRepositoryPipelineConfigRequest) (*operations.GetRepositoryPipelineConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelinesConfig = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineKnownHost - Retrieve a repository level known host.
func (s *SDK) GetRepositoryPipelineKnownHost(ctx context.Context, request operations.GetRepositoryPipelineKnownHostRequest) (*operations.GetRepositoryPipelineKnownHostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineKnownHostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineKnownHost = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineKnownHosts - Find repository level known hosts.
func (s *SDK) GetRepositoryPipelineKnownHosts(ctx context.Context, request operations.GetRepositoryPipelineKnownHostsRequest) (*operations.GetRepositoryPipelineKnownHostsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineKnownHostsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineKnownHosts
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineKnownHosts = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineSchedule - Retrieve a schedule by its UUID.
func (s *SDK) GetRepositoryPipelineSchedule(ctx context.Context, request operations.GetRepositoryPipelineScheduleRequest) (*operations.GetRepositoryPipelineScheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineScheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineSchedule = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineScheduleExecutions - Retrieve the executions of a given schedule.
func (s *SDK) GetRepositoryPipelineScheduleExecutions(ctx context.Context, request operations.GetRepositoryPipelineScheduleExecutionsRequest) (*operations.GetRepositoryPipelineScheduleExecutionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineScheduleExecutionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineScheduleExecutions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineScheduleExecutions = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineSchedules - Retrieve the configured schedules for the given repository.
func (s *SDK) GetRepositoryPipelineSchedules(ctx context.Context, request operations.GetRepositoryPipelineSchedulesRequest) (*operations.GetRepositoryPipelineSchedulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineSchedulesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineSchedules
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineSchedules = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineSSHKeyPair - Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
func (s *SDK) GetRepositoryPipelineSSHKeyPair(ctx context.Context, request operations.GetRepositoryPipelineSSHKeyPairRequest) (*operations.GetRepositoryPipelineSSHKeyPairResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineSSHKeyPairResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineSSHKeyPair = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineVariable - Retrieve a repository level variable.
func (s *SDK) GetRepositoryPipelineVariable(ctx context.Context, request operations.GetRepositoryPipelineVariableRequest) (*operations.GetRepositoryPipelineVariableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineVariableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoryPipelineVariables - Find repository level variables.
func (s *SDK) GetRepositoryPipelineVariables(ctx context.Context, request operations.GetRepositoryPipelineVariablesRequest) (*operations.GetRepositoryPipelineVariablesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoryPipelineVariablesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPipelineVariables
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPipelineVariables = out
		}
	}

	return res, nil
}

// RetrieveUserHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
func (s *SDK) RetrieveUserHostedPropertyValue(ctx context.Context, request operations.RetrieveUserHostedPropertyValueRequest) (*operations.RetrieveUserHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveUserHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// SearchAccount - Search for code in the repositories of the specified team.
//
// Searching across all repositories:
//
// ```
// curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 2,
//	      "content_matches": [
//	        {
//	          "lines": [
//	            {
//	              "line": 2,
//	              "segments": []
//	            },
//	            {
//	              "line": 3,
//	              "segments": [
//	                {
//	                  "text": "def "
//	                },
//	                {
//	                  "text": "foo",
//	                  "match": true
//	                },
//	                {
//	                  "text": "():"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 4,
//	              "segments": [
//	                {
//	                  "text": "    print(\"snek\")"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 5,
//	              "segments": []
//	            }
//	          ]
//	        }
//	      ],
//	      "path_matches": [
//	        {
//	          "text": "src/"
//	        },
//	        {
//	          "text": "foo",
//	          "match": true
//	        },
//	        {
//	          "text": ".py"
//	        }
//	      ],
//	      "file": {
//	        "path": "src/foo.py",
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        }
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Note that searches can match in the file's text (`content_matches`),
// the path (`path_matches`), or both as in the example above.
//
// You can use the same syntax for the search query as in the UI, e.g.
// to only search within a specific repository:
//
// ```
// curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo+repo:demo'
// # results from the "demo" repository
// ```
//
// Similar to other APIs, you can request more fields using a
// `fields` query parameter. E.g. to get some more information about
// the repository of matched files (the `%2B` is a URL-encoded `+`):
//
// ```
//
//	curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code'\
//	     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 1,
//	      "content_matches": [...],
//	      "path_matches": [...],
//	      "file": {
//	        "commit": {
//	          "type": "commit",
//	          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            }
//	          },
//	          "repository": {
//	            "name": "demo",
//	            "type": "repository",
//	            "full_name": "my-workspace/demo",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/my-workspace/demo"
//	              },
//	              "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
//	              }
//	            },
//	            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
//	          }
//	        },
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        },
//	        "path": "src/foo.py"
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
func (s *SDK) SearchAccount(ctx context.Context, request operations.SearchAccountRequest) (*operations.SearchAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/search/code", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchResultPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchResultPage = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// StopPipeline - Signal the stop of a pipeline and all of its steps that not have completed yet.
func (s *SDK) StopPipeline(ctx context.Context, request operations.StopPipelineRequest) (*operations.StopPipelineResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StopPipelineResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateCommitHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
func (s *SDK) UpdateCommitHostedPropertyValue(ctx context.Context, request operations.UpdateCommitHostedPropertyValueRequest) (*operations.UpdateCommitHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateCommitHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// UpdateDeploymentVariable - Update a deployment environment level variable.
func (s *SDK) UpdateDeploymentVariable(ctx context.Context, request operations.UpdateDeploymentVariableRequest) (*operations.UpdateDeploymentVariableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateDeploymentVariableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeploymentVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateEnvironmentForRepository - Update an environment
func (s *SDK) UpdateEnvironmentForRepository(ctx context.Context, request operations.UpdateEnvironmentForRepositoryRequest) (*operations.UpdateEnvironmentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateEnvironmentForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdatePipelineVariableForTeam - Update a team level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) UpdatePipelineVariableForTeam(ctx context.Context, request operations.UpdatePipelineVariableForTeamRequest) (*operations.UpdatePipelineVariableForTeamResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdatePipelineVariableForTeamResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdatePipelineVariableForUser - Update a user level variable.
// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
func (s *SDK) UpdatePipelineVariableForUser(ctx context.Context, request operations.UpdatePipelineVariableForUserRequest) (*operations.UpdatePipelineVariableForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdatePipelineVariableForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdatePipelineVariableForWorkspace - Update a workspace level variable.
func (s *SDK) UpdatePipelineVariableForWorkspace(ctx context.Context, request operations.UpdatePipelineVariableForWorkspaceRequest) (*operations.UpdatePipelineVariableForWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdatePipelineVariableForWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdatePullRequestHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
func (s *SDK) UpdatePullRequestHostedPropertyValue(ctx context.Context, request operations.UpdatePullRequestHostedPropertyValueRequest) (*operations.UpdatePullRequestHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdatePullRequestHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// UpdateRepositoryBuildNumber - Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
func (s *SDK) UpdateRepositoryBuildNumber(ctx context.Context, request operations.UpdateRepositoryBuildNumberRequest) (*operations.UpdateRepositoryBuildNumberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/build_number", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateRepositoryBuildNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineBuildNumber = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateRepositoryHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
func (s *SDK) UpdateRepositoryHostedPropertyValue(ctx context.Context, request operations.UpdateRepositoryHostedPropertyValueRequest) (*operations.UpdateRepositoryHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateRepositoryHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// UpdateRepositoryPipelineConfig - Update the pipelines configuration for a repository.
func (s *SDK) UpdateRepositoryPipelineConfig(ctx context.Context, request operations.UpdateRepositoryPipelineConfigRequest) (*operations.UpdateRepositoryPipelineConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateRepositoryPipelineConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelinesConfig = out
		}
	}

	return res, nil
}

// UpdateRepositoryPipelineKeyPair - Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
func (s *SDK) UpdateRepositoryPipelineKeyPair(ctx context.Context, request operations.UpdateRepositoryPipelineKeyPairRequest) (*operations.UpdateRepositoryPipelineKeyPairResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateRepositoryPipelineKeyPairResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineSSHKeyPair = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateRepositoryPipelineKnownHost - Update a repository level known host.
func (s *SDK) UpdateRepositoryPipelineKnownHost(ctx context.Context, request operations.UpdateRepositoryPipelineKnownHostRequest) (*operations.UpdateRepositoryPipelineKnownHostResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateRepositoryPipelineKnownHostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineKnownHost = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateRepositoryPipelineSchedule - Update a schedule.
func (s *SDK) UpdateRepositoryPipelineSchedule(ctx context.Context, request operations.UpdateRepositoryPipelineScheduleRequest) (*operations.UpdateRepositoryPipelineScheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateRepositoryPipelineScheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineSchedule = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateRepositoryPipelineVariable - Update a repository level variable.
func (s *SDK) UpdateRepositoryPipelineVariable(ctx context.Context, request operations.UpdateRepositoryPipelineVariableRequest) (*operations.UpdateRepositoryPipelineVariableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateRepositoryPipelineVariableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PipelineVariable = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateUserHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
func (s *SDK) UpdateUserHostedPropertyValue(ctx context.Context, request operations.UpdateUserHostedPropertyValueRequest) (*operations.UpdateUserHostedPropertyValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/properties/{app_key}/{property_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateUserHostedPropertyValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}
