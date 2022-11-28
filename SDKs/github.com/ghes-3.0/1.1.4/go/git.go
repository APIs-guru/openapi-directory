package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Git struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewGit(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Git {
	return &Git{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GitCreateBlob - Create a blob
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-blob - API method documentation
func (s *Git) GitCreateBlob(ctx context.Context, request operations.GitCreateBlobRequest) (*operations.GitCreateBlobResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/blobs", request.PathParams)

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

	res := &operations.GitCreateBlobResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ShortBlob
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ShortBlob = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitCreateCommit - Create a commit
// Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
//
// **Signature verification object**
//
// The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
//
// | Name | Type | Description |
// | ---- | ---- | ----------- |
// | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
// | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
// | `signature` | `string` | The signature that was extracted from the commit. |
// | `payload` | `string` | The value that was signed. |
//
// These are the possible values for `reason` in the `verification` object:
//
// | Value | Description |
// | ----- | ----------- |
// | `expired_key` | The key that made the signature is expired. |
// | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
// | `gpgverify_error` | There was an error communicating with the signature verification service. |
// | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
// | `unsigned` | The object does not include a signature. |
// | `unknown_signature_type` | A non-PGP signature was found in the commit. |
// | `no_user` | No user was associated with the `committer` email address in the commit. |
// | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
// | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
// | `unknown_key` | The key that made the signature has not been registered with any user's account. |
// | `malformed_signature` | There was an error parsing the signature. |
// | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
// | `valid` | None of the above errors applied, so the signature is considered to be verified. |
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-commit - API method documentation
func (s *Git) GitCreateCommit(ctx context.Context, request operations.GitCreateCommitRequest) (*operations.GitCreateCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/commits", request.PathParams)

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

	res := &operations.GitCreateCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitCommit
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitCommit = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitCreateRef - Create a reference
// Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-reference - API method documentation
func (s *Git) GitCreateRef(ctx context.Context, request operations.GitCreateRefRequest) (*operations.GitCreateRefResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/refs", request.PathParams)

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

	res := &operations.GitCreateRefResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitRef
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitRef = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitCreateTag - Create a tag object
// Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.
//
// **Signature verification object**
//
// The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
//
// | Name | Type | Description |
// | ---- | ---- | ----------- |
// | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
// | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
// | `signature` | `string` | The signature that was extracted from the commit. |
// | `payload` | `string` | The value that was signed. |
//
// These are the possible values for `reason` in the `verification` object:
//
// | Value | Description |
// | ----- | ----------- |
// | `expired_key` | The key that made the signature is expired. |
// | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
// | `gpgverify_error` | There was an error communicating with the signature verification service. |
// | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
// | `unsigned` | The object does not include a signature. |
// | `unknown_signature_type` | A non-PGP signature was found in the commit. |
// | `no_user` | No user was associated with the `committer` email address in the commit. |
// | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
// | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
// | `unknown_key` | The key that made the signature has not been registered with any user's account. |
// | `malformed_signature` | There was an error parsing the signature. |
// | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
// | `valid` | None of the above errors applied, so the signature is considered to be verified. |
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-tag-object - API method documentation
func (s *Git) GitCreateTag(ctx context.Context, request operations.GitCreateTagRequest) (*operations.GitCreateTagResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/tags", request.PathParams)

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

	res := &operations.GitCreateTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitTag
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitTag = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitCreateTree - Create a tree
// The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
//
// If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/enterprise-server@3.0/rest/reference/git#update-a-reference)."
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#create-a-tree - API method documentation
func (s *Git) GitCreateTree(ctx context.Context, request operations.GitCreateTreeRequest) (*operations.GitCreateTreeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/trees", request.PathParams)

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

	res := &operations.GitCreateTreeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitTree
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitTree = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitDeleteRef - Delete a reference
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#delete-a-reference - API method documentation
func (s *Git) GitDeleteRef(ctx context.Context, request operations.GitDeleteRefRequest) (*operations.GitDeleteRefResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/refs/{ref}", request.PathParams)

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

	res := &operations.GitDeleteRefResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitGetBlob - Get a blob
// The `content` in the response will always be Base64 encoded.
//
// _Note_: This API supports blobs up to 100 megabytes in size.
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#get-a-blob - API method documentation
func (s *Git) GitGetBlob(ctx context.Context, request operations.GitGetBlobRequest) (*operations.GitGetBlobResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/blobs/{file_sha}", request.PathParams)

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

	res := &operations.GitGetBlobResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Blob
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Blob = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitGetCommit - Get a commit
// Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
//
// **Signature verification object**
//
// The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
//
// | Name | Type | Description |
// | ---- | ---- | ----------- |
// | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
// | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
// | `signature` | `string` | The signature that was extracted from the commit. |
// | `payload` | `string` | The value that was signed. |
//
// These are the possible values for `reason` in the `verification` object:
//
// | Value | Description |
// | ----- | ----------- |
// | `expired_key` | The key that made the signature is expired. |
// | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
// | `gpgverify_error` | There was an error communicating with the signature verification service. |
// | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
// | `unsigned` | The object does not include a signature. |
// | `unknown_signature_type` | A non-PGP signature was found in the commit. |
// | `no_user` | No user was associated with the `committer` email address in the commit. |
// | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
// | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
// | `unknown_key` | The key that made the signature has not been registered with any user's account. |
// | `malformed_signature` | There was an error parsing the signature. |
// | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
// | `valid` | None of the above errors applied, so the signature is considered to be verified. |
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#get-a-commit - API method documentation
func (s *Git) GitGetCommit(ctx context.Context, request operations.GitGetCommitRequest) (*operations.GitGetCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/commits/{commit_sha}", request.PathParams)

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

	res := &operations.GitGetCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitCommit
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitCommit = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// GitGetRef - Get a reference
// Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.
//
// **Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.0/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#get-a-reference - API method documentation
func (s *Git) GitGetRef(ctx context.Context, request operations.GitGetRefRequest) (*operations.GitGetRefResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/ref/{ref}", request.PathParams)

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

	res := &operations.GitGetRefResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitRef
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitRef = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// GitGetTag - Get a tag
// **Signature verification object**
//
// The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
//
// | Name | Type | Description |
// | ---- | ---- | ----------- |
// | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
// | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
// | `signature` | `string` | The signature that was extracted from the commit. |
// | `payload` | `string` | The value that was signed. |
//
// These are the possible values for `reason` in the `verification` object:
//
// | Value | Description |
// | ----- | ----------- |
// | `expired_key` | The key that made the signature is expired. |
// | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
// | `gpgverify_error` | There was an error communicating with the signature verification service. |
// | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
// | `unsigned` | The object does not include a signature. |
// | `unknown_signature_type` | A non-PGP signature was found in the commit. |
// | `no_user` | No user was associated with the `committer` email address in the commit. |
// | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
// | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
// | `unknown_key` | The key that made the signature has not been registered with any user's account. |
// | `malformed_signature` | There was an error parsing the signature. |
// | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
// | `valid` | None of the above errors applied, so the signature is considered to be verified. |
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#get-a-tag - API method documentation
func (s *Git) GitGetTag(ctx context.Context, request operations.GitGetTagRequest) (*operations.GitGetTagResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/tags/{tag_sha}", request.PathParams)

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

	res := &operations.GitGetTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitTag
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitTag = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// GitGetTree - Get a tree
// Returns a single tree using the SHA1 value for that tree.
//
// If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#get-a-tree - API method documentation
func (s *Git) GitGetTree(ctx context.Context, request operations.GitGetTreeRequest) (*operations.GitGetTreeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/trees/{tree_sha}", request.PathParams)

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

	res := &operations.GitGetTreeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitTree
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitTree = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// GitListMatchingRefs - List matching references
// Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.
//
// When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.
//
// **Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.0/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
//
// If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#list-matching-references - API method documentation
func (s *Git) GitListMatchingRefs(ctx context.Context, request operations.GitListMatchingRefsRequest) (*operations.GitListMatchingRefsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/matching-refs/{ref}", request.PathParams)

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

	res := &operations.GitListMatchingRefsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GitRef
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitRefs = out
		}
	}

	return res, nil
}

// GitUpdateRef - Update a reference
// https://docs.github.com/enterprise-server@3.0/rest/reference/git#update-a-reference - API method documentation
func (s *Git) GitUpdateRef(ctx context.Context, request operations.GitUpdateRefRequest) (*operations.GitUpdateRefResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/git/refs/{ref}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.GitUpdateRefResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitRef
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitRef = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}
