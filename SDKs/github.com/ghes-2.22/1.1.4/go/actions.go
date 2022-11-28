package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Actions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewActions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Actions {
	return &Actions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg - Add repository access to a self-hosted runner group in an organization
// Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization - API method documentation
func (s *Actions) ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg(ctx context.Context, request operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest) (*operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", request.PathParams)

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

	res := &operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsAddSelectedRepoToOrgSecret - Add selected repository to an organization secret
// Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#add-selected-repository-to-an-organization-secret - API method documentation
func (s *Actions) ActionsAddSelectedRepoToOrgSecret(ctx context.Context, request operations.ActionsAddSelectedRepoToOrgSecretRequest) (*operations.ActionsAddSelectedRepoToOrgSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", request.PathParams)

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

	res := &operations.ActionsAddSelectedRepoToOrgSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 409:
	}

	return res, nil
}

// ActionsAddSelfHostedRunnerToGroupForOrg - Add a self-hosted runner to a group for an organization
// Adds a self-hosted runner to a runner group configured in an organization.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization - API method documentation
func (s *Actions) ActionsAddSelfHostedRunnerToGroupForOrg(ctx context.Context, request operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest) (*operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.PathParams)

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

	res := &operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsCancelWorkflowRun - Cancel a workflow run
// Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#cancel-a-workflow-run - API method documentation
func (s *Actions) ActionsCancelWorkflowRun(ctx context.Context, request operations.ActionsCancelWorkflowRunRequest) (*operations.ActionsCancelWorkflowRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", request.PathParams)

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

	res := &operations.ActionsCancelWorkflowRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsCancelWorkflowRun202ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsCreateOrUpdateOrgSecret - Create or update an organization secret
// Creates or updates an organization secret with an encrypted value. Encrypt your secret using
// [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
// token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
// use this endpoint.
//
// #### Example encrypting a secret using Node.js
//
// Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
//
// ```
// const sodium = require('tweetsodium');
//
// const key = "base64-encoded-public-key";
// const value = "plain-text-secret";
//
// // Convert the message and key to Uint8Array's (Buffer implements that interface)
// const messageBytes = Buffer.from(value);
// const keyBytes = Buffer.from(key, 'base64');
//
// // Encrypt using LibSodium.
// const encryptedBytes = sodium.seal(messageBytes, keyBytes);
//
// // Base64 the encrypted secret
// const encrypted = Buffer.from(encryptedBytes).toString('base64');
//
// console.log(encrypted);
// ```
//
// #### Example encrypting a secret using Python
//
// Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
//
// ```
// from base64 import b64encode
// from nacl import encoding, public
//
// def encrypt(public_key: str, secret_value: str) -> str:
//
//	"""Encrypt a Unicode string using the public key."""
//	public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
//	sealed_box = public.SealedBox(public_key)
//	encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
//	return b64encode(encrypted).decode("utf-8")
//
// ```
//
// #### Example encrypting a secret using C#
//
// Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
//
// ```
// var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
// var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
//
// var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
//
// Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
// ```
//
// #### Example encrypting a secret using Ruby
//
// Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
//
// ```ruby
// require "rbnacl"
// require "base64"
//
// key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
// public_key = RbNaCl::PublicKey.new(key)
//
// box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
// encrypted_secret = box.encrypt("my_secret")
//
// # Print the base64 encoded secret
// puts Base64.strict_encode64(encrypted_secret)
// ```
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret - API method documentation
func (s *Actions) ActionsCreateOrUpdateOrgSecret(ctx context.Context, request operations.ActionsCreateOrUpdateOrgSecretRequest) (*operations.ActionsCreateOrUpdateOrgSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/{secret_name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.ActionsCreateOrUpdateOrgSecretResponse{
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

			res.EmptyObject = out
		}
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsCreateOrUpdateRepoSecret - Create or update a repository secret
// Creates or updates a repository secret with an encrypted value. Encrypt your secret using
// [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
// token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
// this endpoint.
//
// #### Example encrypting a secret using Node.js
//
// Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
//
// ```
// const sodium = require('tweetsodium');
//
// const key = "base64-encoded-public-key";
// const value = "plain-text-secret";
//
// // Convert the message and key to Uint8Array's (Buffer implements that interface)
// const messageBytes = Buffer.from(value);
// const keyBytes = Buffer.from(key, 'base64');
//
// // Encrypt using LibSodium.
// const encryptedBytes = sodium.seal(messageBytes, keyBytes);
//
// // Base64 the encrypted secret
// const encrypted = Buffer.from(encryptedBytes).toString('base64');
//
// console.log(encrypted);
// ```
//
// #### Example encrypting a secret using Python
//
// Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
//
// ```
// from base64 import b64encode
// from nacl import encoding, public
//
// def encrypt(public_key: str, secret_value: str) -> str:
//
//	"""Encrypt a Unicode string using the public key."""
//	public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
//	sealed_box = public.SealedBox(public_key)
//	encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
//	return b64encode(encrypted).decode("utf-8")
//
// ```
//
// #### Example encrypting a secret using C#
//
// Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
//
// ```
// var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
// var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
//
// var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
//
// Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
// ```
//
// #### Example encrypting a secret using Ruby
//
// Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
//
// ```ruby
// require "rbnacl"
// require "base64"
//
// key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
// public_key = RbNaCl::PublicKey.new(key)
//
// box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
// encrypted_secret = box.encrypt("my_secret")
//
// # Print the base64 encoded secret
// puts Base64.strict_encode64(encrypted_secret)
// ```
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-a-repository-secret - API method documentation
func (s *Actions) ActionsCreateOrUpdateRepoSecret(ctx context.Context, request operations.ActionsCreateOrUpdateRepoSecretRequest) (*operations.ActionsCreateOrUpdateRepoSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.ActionsCreateOrUpdateRepoSecretResponse{
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

			res.ActionsCreateOrUpdateRepoSecret201ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsCreateRegistrationTokenForOrg - Create a registration token for an organization
// Returns a token that you can pass to the `config` script. The token expires after one hour.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
//
// #### Example using registration token
//
// Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
//
// ```
// ./config.sh --url https://github.com/octo-org --token TOKEN
// ```
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-registration-token-for-an-organization - API method documentation
func (s *Actions) ActionsCreateRegistrationTokenForOrg(ctx context.Context, request operations.ActionsCreateRegistrationTokenForOrgRequest) (*operations.ActionsCreateRegistrationTokenForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runners/registration-token", request.PathParams)

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

	res := &operations.ActionsCreateRegistrationTokenForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticationToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationToken = out
		}
	}

	return res, nil
}

// ActionsCreateRegistrationTokenForRepo - Create a registration token for a repository
// Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
// using an access token with the `repo` scope to use this endpoint.
//
// #### Example using registration token
//
// Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
//
// ```
// ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
// ```
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-registration-token-for-a-repository - API method documentation
func (s *Actions) ActionsCreateRegistrationTokenForRepo(ctx context.Context, request operations.ActionsCreateRegistrationTokenForRepoRequest) (*operations.ActionsCreateRegistrationTokenForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runners/registration-token", request.PathParams)

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

	res := &operations.ActionsCreateRegistrationTokenForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticationToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationToken = out
		}
	}

	return res, nil
}

// ActionsCreateRemoveTokenForOrg - Create a remove token for an organization
// Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
//
// #### Example using remove token
//
// To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
// endpoint.
//
// ```
// ./config.sh remove --token TOKEN
// ```
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-remove-token-for-an-organization - API method documentation
func (s *Actions) ActionsCreateRemoveTokenForOrg(ctx context.Context, request operations.ActionsCreateRemoveTokenForOrgRequest) (*operations.ActionsCreateRemoveTokenForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runners/remove-token", request.PathParams)

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

	res := &operations.ActionsCreateRemoveTokenForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticationToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationToken = out
		}
	}

	return res, nil
}

// ActionsCreateRemoveTokenForRepo - Create a remove token for a repository
// Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
// You must authenticate using an access token with the `repo` scope to use this endpoint.
//
// #### Example using remove token
//
// To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
//
// ```
// ./config.sh remove --token TOKEN
// ```
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-remove-token-for-a-repository - API method documentation
func (s *Actions) ActionsCreateRemoveTokenForRepo(ctx context.Context, request operations.ActionsCreateRemoveTokenForRepoRequest) (*operations.ActionsCreateRemoveTokenForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runners/remove-token", request.PathParams)

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

	res := &operations.ActionsCreateRemoveTokenForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticationToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationToken = out
		}
	}

	return res, nil
}

// ActionsCreateSelfHostedRunnerGroupForOrg - Create a self-hosted runner group for an organization
// The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
//
// Creates a new self-hosted runner group for an organization.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization - API method documentation
func (s *Actions) ActionsCreateSelfHostedRunnerGroupForOrg(ctx context.Context, request operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest) (*operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups", request.PathParams)

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

	res := &operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsOrg
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsOrg = out
		}
	}

	return res, nil
}

// ActionsCreateWorkflowDispatch - Create a workflow dispatch event
// You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
//
// You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
//
// You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-workflow-dispatch-event - API method documentation
func (s *Actions) ActionsCreateWorkflowDispatch(ctx context.Context, request operations.ActionsCreateWorkflowDispatchRequest) (*operations.ActionsCreateWorkflowDispatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", request.PathParams)

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

	res := &operations.ActionsCreateWorkflowDispatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteArtifact - Delete an artifact
// Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-an-artifact - API method documentation
func (s *Actions) ActionsDeleteArtifact(ctx context.Context, request operations.ActionsDeleteArtifactRequest) (*operations.ActionsDeleteArtifactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", request.PathParams)

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

	res := &operations.ActionsDeleteArtifactResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteOrgSecret - Delete an organization secret
// Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-an-organization-secret - API method documentation
func (s *Actions) ActionsDeleteOrgSecret(ctx context.Context, request operations.ActionsDeleteOrgSecretRequest) (*operations.ActionsDeleteOrgSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/{secret_name}", request.PathParams)

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

	res := &operations.ActionsDeleteOrgSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteRepoSecret - Delete a repository secret
// Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-repository-secret - API method documentation
func (s *Actions) ActionsDeleteRepoSecret(ctx context.Context, request operations.ActionsDeleteRepoSecretRequest) (*operations.ActionsDeleteRepoSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.PathParams)

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

	res := &operations.ActionsDeleteRepoSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteSelfHostedRunnerFromOrg - Delete a self-hosted runner from an organization
// Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization - API method documentation
func (s *Actions) ActionsDeleteSelfHostedRunnerFromOrg(ctx context.Context, request operations.ActionsDeleteSelfHostedRunnerFromOrgRequest) (*operations.ActionsDeleteSelfHostedRunnerFromOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runners/{runner_id}", request.PathParams)

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

	res := &operations.ActionsDeleteSelfHostedRunnerFromOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteSelfHostedRunnerFromRepo - Delete a self-hosted runner from a repository
// Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
//
// You must authenticate using an access token with the `repo`
// scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository - API method documentation
func (s *Actions) ActionsDeleteSelfHostedRunnerFromRepo(ctx context.Context, request operations.ActionsDeleteSelfHostedRunnerFromRepoRequest) (*operations.ActionsDeleteSelfHostedRunnerFromRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runners/{runner_id}", request.PathParams)

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

	res := &operations.ActionsDeleteSelfHostedRunnerFromRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteSelfHostedRunnerGroupFromOrg - Delete a self-hosted runner group from an organization
// Deletes a self-hosted runner group for an organization.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization - API method documentation
func (s *Actions) ActionsDeleteSelfHostedRunnerGroupFromOrg(ctx context.Context, request operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest) (*operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.PathParams)

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

	res := &operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteWorkflowRun - Delete a workflow run
// Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
// private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
// this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-workflow-run - API method documentation
func (s *Actions) ActionsDeleteWorkflowRun(ctx context.Context, request operations.ActionsDeleteWorkflowRunRequest) (*operations.ActionsDeleteWorkflowRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}", request.PathParams)

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

	res := &operations.ActionsDeleteWorkflowRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDeleteWorkflowRunLogs - Delete workflow run logs
// Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-workflow-run-logs - API method documentation
func (s *Actions) ActionsDeleteWorkflowRunLogs(ctx context.Context, request operations.ActionsDeleteWorkflowRunLogsRequest) (*operations.ActionsDeleteWorkflowRunLogsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", request.PathParams)

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

	res := &operations.ActionsDeleteWorkflowRunLogsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsDownloadArtifact - Download an artifact
// Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
// the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
// the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
// GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#download-an-artifact - API method documentation
func (s *Actions) ActionsDownloadArtifact(ctx context.Context, request operations.ActionsDownloadArtifactRequest) (*operations.ActionsDownloadArtifactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", request.PathParams)

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

	res := &operations.ActionsDownloadArtifactResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// ActionsDownloadJobLogsForWorkflowRun - Download job logs for a workflow run
// Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
// for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
// use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
// have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#download-job-logs-for-a-workflow-run - API method documentation
func (s *Actions) ActionsDownloadJobLogsForWorkflowRun(ctx context.Context, request operations.ActionsDownloadJobLogsForWorkflowRunRequest) (*operations.ActionsDownloadJobLogsForWorkflowRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", request.PathParams)

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

	res := &operations.ActionsDownloadJobLogsForWorkflowRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// ActionsDownloadWorkflowRunLogs - Download workflow run logs
// Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
// `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
// this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
// the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#download-workflow-run-logs - API method documentation
func (s *Actions) ActionsDownloadWorkflowRunLogs(ctx context.Context, request operations.ActionsDownloadWorkflowRunLogsRequest) (*operations.ActionsDownloadWorkflowRunLogsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", request.PathParams)

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

	res := &operations.ActionsDownloadWorkflowRunLogsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// ActionsGetArtifact - Get an artifact
// Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-an-artifact - API method documentation
func (s *Actions) ActionsGetArtifact(ctx context.Context, request operations.ActionsGetArtifactRequest) (*operations.ActionsGetArtifactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", request.PathParams)

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

	res := &operations.ActionsGetArtifactResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Artifact
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Artifact = out
		}
	}

	return res, nil
}

// ActionsGetJobForWorkflowRun - Get a job for a workflow run
// Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-job-for-a-workflow-run - API method documentation
func (s *Actions) ActionsGetJobForWorkflowRun(ctx context.Context, request operations.ActionsGetJobForWorkflowRunRequest) (*operations.ActionsGetJobForWorkflowRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/jobs/{job_id}", request.PathParams)

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

	res := &operations.ActionsGetJobForWorkflowRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Job
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Job = out
		}
	}

	return res, nil
}

// ActionsGetOrgPublicKey - Get an organization public key
// Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-an-organization-public-key - API method documentation
func (s *Actions) ActionsGetOrgPublicKey(ctx context.Context, request operations.ActionsGetOrgPublicKeyRequest) (*operations.ActionsGetOrgPublicKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/public-key", request.PathParams)

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

	res := &operations.ActionsGetOrgPublicKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsPublicKey
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsPublicKey = out
		}
	}

	return res, nil
}

// ActionsGetOrgSecret - Get an organization secret
// Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-an-organization-secret - API method documentation
func (s *Actions) ActionsGetOrgSecret(ctx context.Context, request operations.ActionsGetOrgSecretRequest) (*operations.ActionsGetOrgSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/{secret_name}", request.PathParams)

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

	res := &operations.ActionsGetOrgSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrganizationActionsSecret
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationActionsSecret = out
		}
	}

	return res, nil
}

// ActionsGetRepoPublicKey - Get a repository public key
// Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-repository-public-key - API method documentation
func (s *Actions) ActionsGetRepoPublicKey(ctx context.Context, request operations.ActionsGetRepoPublicKeyRequest) (*operations.ActionsGetRepoPublicKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/secrets/public-key", request.PathParams)

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

	res := &operations.ActionsGetRepoPublicKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsPublicKey
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsPublicKey = out
		}
	}

	return res, nil
}

// ActionsGetRepoSecret - Get a repository secret
// Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-repository-secret - API method documentation
func (s *Actions) ActionsGetRepoSecret(ctx context.Context, request operations.ActionsGetRepoSecretRequest) (*operations.ActionsGetRepoSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.PathParams)

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

	res := &operations.ActionsGetRepoSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsSecret
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsSecret = out
		}
	}

	return res, nil
}

// ActionsGetSelfHostedRunnerForOrg - Get a self-hosted runner for an organization
// Gets a specific self-hosted runner configured in an organization.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-self-hosted-runner-for-an-organization - API method documentation
func (s *Actions) ActionsGetSelfHostedRunnerForOrg(ctx context.Context, request operations.ActionsGetSelfHostedRunnerForOrgRequest) (*operations.ActionsGetSelfHostedRunnerForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runners/{runner_id}", request.PathParams)

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

	res := &operations.ActionsGetSelfHostedRunnerForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerNoLabels
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerNoLabels = out
		}
	}

	return res, nil
}

// ActionsGetSelfHostedRunnerForRepo - Get a self-hosted runner for a repository
// Gets a specific self-hosted runner configured in a repository.
//
// You must authenticate using an access token with the `repo` scope to use this
// endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-self-hosted-runner-for-a-repository - API method documentation
func (s *Actions) ActionsGetSelfHostedRunnerForRepo(ctx context.Context, request operations.ActionsGetSelfHostedRunnerForRepoRequest) (*operations.ActionsGetSelfHostedRunnerForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runners/{runner_id}", request.PathParams)

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

	res := &operations.ActionsGetSelfHostedRunnerForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerNoLabels
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerNoLabels = out
		}
	}

	return res, nil
}

// ActionsGetSelfHostedRunnerGroupForOrg - Get a self-hosted runner group for an organization
// Gets a specific self-hosted runner group for an organization.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization - API method documentation
func (s *Actions) ActionsGetSelfHostedRunnerGroupForOrg(ctx context.Context, request operations.ActionsGetSelfHostedRunnerGroupForOrgRequest) (*operations.ActionsGetSelfHostedRunnerGroupForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.PathParams)

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

	res := &operations.ActionsGetSelfHostedRunnerGroupForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsOrg
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsOrg = out
		}
	}

	return res, nil
}

// ActionsGetWorkflow - Get a workflow
// Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-workflow - API method documentation
func (s *Actions) ActionsGetWorkflow(ctx context.Context, request operations.ActionsGetWorkflowRequest) (*operations.ActionsGetWorkflowResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}", request.PathParams)

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

	res := &operations.ActionsGetWorkflowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Workflow
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Workflow = out
		}
	}

	return res, nil
}

// ActionsGetWorkflowRun - Get a workflow run
// Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-workflow-run - API method documentation
func (s *Actions) ActionsGetWorkflowRun(ctx context.Context, request operations.ActionsGetWorkflowRunRequest) (*operations.ActionsGetWorkflowRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}", request.PathParams)

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

	res := &operations.ActionsGetWorkflowRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.WorkflowRun
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WorkflowRun = out
		}
	}

	return res, nil
}

// ActionsListArtifactsForRepo - List artifacts for a repository
// Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-artifacts-for-a-repository - API method documentation
func (s *Actions) ActionsListArtifactsForRepo(ctx context.Context, request operations.ActionsListArtifactsForRepoRequest) (*operations.ActionsListArtifactsForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/artifacts", request.PathParams)

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

	res := &operations.ActionsListArtifactsForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListArtifactsForRepo200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListArtifactsForRepo200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListJobsForWorkflowRun - List jobs for a workflow run
// Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#parameters).
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-jobs-for-a-workflow-run - API method documentation
func (s *Actions) ActionsListJobsForWorkflowRun(ctx context.Context, request operations.ActionsListJobsForWorkflowRunRequest) (*operations.ActionsListJobsForWorkflowRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", request.PathParams)

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

	res := &operations.ActionsListJobsForWorkflowRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListJobsForWorkflowRun200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListJobsForWorkflowRun200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListOrgSecrets - List organization secrets
// Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-organization-secrets - API method documentation
func (s *Actions) ActionsListOrgSecrets(ctx context.Context, request operations.ActionsListOrgSecretsRequest) (*operations.ActionsListOrgSecretsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets", request.PathParams)

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

	res := &operations.ActionsListOrgSecretsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListOrgSecrets200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListOrgSecrets200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListRepoAccessToSelfHostedRunnerGroupInOrg - List repository access to a self-hosted runner group in an organization
// The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
//
// Lists the repositories with access to a self-hosted runner group configured in an organization.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
func (s *Actions) ActionsListRepoAccessToSelfHostedRunnerGroupInOrg(ctx context.Context, request operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest) (*operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", request.PathParams)

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

	res := &operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListRepoSecrets - List repository secrets
// Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-repository-secrets - API method documentation
func (s *Actions) ActionsListRepoSecrets(ctx context.Context, request operations.ActionsListRepoSecretsRequest) (*operations.ActionsListRepoSecretsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/secrets", request.PathParams)

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

	res := &operations.ActionsListRepoSecretsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListRepoSecrets200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListRepoSecrets200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListRepoWorkflows - List repository workflows
// Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-repository-workflows - API method documentation
func (s *Actions) ActionsListRepoWorkflows(ctx context.Context, request operations.ActionsListRepoWorkflowsRequest) (*operations.ActionsListRepoWorkflowsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/workflows", request.PathParams)

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

	res := &operations.ActionsListRepoWorkflowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListRepoWorkflows200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListRepoWorkflows200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListRunnerApplicationsForOrg - List runner applications for an organization
// Lists binaries for the runner application that you can download and run.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-runner-applications-for-an-organization - API method documentation
func (s *Actions) ActionsListRunnerApplicationsForOrg(ctx context.Context, request operations.ActionsListRunnerApplicationsForOrgRequest) (*operations.ActionsListRunnerApplicationsForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runners/downloads", request.PathParams)

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

	res := &operations.ActionsListRunnerApplicationsForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RunnerApplication
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerApplications = out
		}
	}

	return res, nil
}

// ActionsListRunnerApplicationsForRepo - List runner applications for a repository
// Lists binaries for the runner application that you can download and run.
//
// You must authenticate using an access token with the `repo` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-runner-applications-for-a-repository - API method documentation
func (s *Actions) ActionsListRunnerApplicationsForRepo(ctx context.Context, request operations.ActionsListRunnerApplicationsForRepoRequest) (*operations.ActionsListRunnerApplicationsForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runners/downloads", request.PathParams)

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

	res := &operations.ActionsListRunnerApplicationsForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RunnerApplication
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerApplications = out
		}
	}

	return res, nil
}

// ActionsListSelectedReposForOrgSecret - List selected repositories for an organization secret
// Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-selected-repositories-for-an-organization-secret - API method documentation
func (s *Actions) ActionsListSelectedReposForOrgSecret(ctx context.Context, request operations.ActionsListSelectedReposForOrgSecretRequest) (*operations.ActionsListSelectedReposForOrgSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories", request.PathParams)

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

	res := &operations.ActionsListSelectedReposForOrgSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListSelectedReposForOrgSecret200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListSelectedReposForOrgSecret200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListSelfHostedRunnerGroupsForOrg - List self-hosted runner groups for an organization
// Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization - API method documentation
func (s *Actions) ActionsListSelfHostedRunnerGroupsForOrg(ctx context.Context, request operations.ActionsListSelfHostedRunnerGroupsForOrgRequest) (*operations.ActionsListSelfHostedRunnerGroupsForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups", request.PathParams)

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

	res := &operations.ActionsListSelfHostedRunnerGroupsForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListSelfHostedRunnersForOrg - List self-hosted runners for an organization
// Lists all self-hosted runners configured in an organization.
//
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runners-for-an-organization - API method documentation
func (s *Actions) ActionsListSelfHostedRunnersForOrg(ctx context.Context, request operations.ActionsListSelfHostedRunnersForOrgRequest) (*operations.ActionsListSelfHostedRunnersForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runners", request.PathParams)

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

	res := &operations.ActionsListSelfHostedRunnersForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListSelfHostedRunnersForOrg200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListSelfHostedRunnersForOrg200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListSelfHostedRunnersForRepo - List self-hosted runners for a repository
// Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runners-for-a-repository - API method documentation
func (s *Actions) ActionsListSelfHostedRunnersForRepo(ctx context.Context, request operations.ActionsListSelfHostedRunnersForRepoRequest) (*operations.ActionsListSelfHostedRunnersForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runners", request.PathParams)

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

	res := &operations.ActionsListSelfHostedRunnersForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListSelfHostedRunnersForRepo200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListSelfHostedRunnersForRepo200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListSelfHostedRunnersInGroupForOrg - List self-hosted runners in a group for an organization
// Lists self-hosted runners that are in a specific organization group.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization - API method documentation
func (s *Actions) ActionsListSelfHostedRunnersInGroupForOrg(ctx context.Context, request operations.ActionsListSelfHostedRunnersInGroupForOrgRequest) (*operations.ActionsListSelfHostedRunnersInGroupForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", request.PathParams)

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

	res := &operations.ActionsListSelfHostedRunnersInGroupForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListWorkflowRunArtifacts - List workflow run artifacts
// Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-workflow-run-artifacts - API method documentation
func (s *Actions) ActionsListWorkflowRunArtifacts(ctx context.Context, request operations.ActionsListWorkflowRunArtifactsRequest) (*operations.ActionsListWorkflowRunArtifactsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", request.PathParams)

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

	res := &operations.ActionsListWorkflowRunArtifactsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListWorkflowRunArtifacts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListWorkflowRunArtifacts200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListWorkflowRuns - List workflow runs
// List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#parameters).
//
// Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-workflow-runs - API method documentation
func (s *Actions) ActionsListWorkflowRuns(ctx context.Context, request operations.ActionsListWorkflowRunsRequest) (*operations.ActionsListWorkflowRunsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", request.PathParams)

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

	res := &operations.ActionsListWorkflowRunsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListWorkflowRuns200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListWorkflowRuns200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsListWorkflowRunsForRepo - List workflow runs for a repository
// Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#parameters).
//
// Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-workflow-runs-for-a-repository - API method documentation
func (s *Actions) ActionsListWorkflowRunsForRepo(ctx context.Context, request operations.ActionsListWorkflowRunsForRepoRequest) (*operations.ActionsListWorkflowRunsForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs", request.PathParams)

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

	res := &operations.ActionsListWorkflowRunsForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActionsListWorkflowRunsForRepo200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsListWorkflowRunsForRepo200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsReRunWorkflow - Re-run a workflow
// Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#re-run-a-workflow - API method documentation
func (s *Actions) ActionsReRunWorkflow(ctx context.Context, request operations.ActionsReRunWorkflowRequest) (*operations.ActionsReRunWorkflowResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", request.PathParams)

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

	res := &operations.ActionsReRunWorkflowResponse{
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

			res.ActionsReRunWorkflow201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg - Remove repository access to a self-hosted runner group in an organization
// Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
func (s *Actions) ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(ctx context.Context, request operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest) (*operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", request.PathParams)

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

	res := &operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsRemoveSelectedRepoFromOrgSecret - Remove selected repository from an organization secret
// Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#remove-selected-repository-from-an-organization-secret - API method documentation
func (s *Actions) ActionsRemoveSelectedRepoFromOrgSecret(ctx context.Context, request operations.ActionsRemoveSelectedRepoFromOrgSecretRequest) (*operations.ActionsRemoveSelectedRepoFromOrgSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", request.PathParams)

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

	res := &operations.ActionsRemoveSelectedRepoFromOrgSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 409:
	}

	return res, nil
}

// ActionsRemoveSelfHostedRunnerFromGroupForOrg - Remove a self-hosted runner from a group for an organization
// Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization - API method documentation
func (s *Actions) ActionsRemoveSelfHostedRunnerFromGroupForOrg(ctx context.Context, request operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest) (*operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.PathParams)

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

	res := &operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg - Set repository access for a self-hosted runner group in an organization
// Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
func (s *Actions) ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg(ctx context.Context, request operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest) (*operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsSetSelectedReposForOrgSecret - Set selected repositories for an organization secret
// Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#set-selected-repositories-for-an-organization-secret - API method documentation
func (s *Actions) ActionsSetSelectedReposForOrgSecret(ctx context.Context, request operations.ActionsSetSelectedReposForOrgSecretRequest) (*operations.ActionsSetSelectedReposForOrgSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.ActionsSetSelectedReposForOrgSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsSetSelfHostedRunnersInGroupForOrg - Set self-hosted runners in a group for an organization
// Replaces the list of self-hosted runners that are part of an organization runner group.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization - API method documentation
func (s *Actions) ActionsSetSelfHostedRunnersInGroupForOrg(ctx context.Context, request operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest) (*operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActionsUpdateSelfHostedRunnerGroupForOrg - Update a self-hosted runner group for an organization
// Updates the `name` and `visibility` of a self-hosted runner group in an organization.
// You must authenticate using an access token with the `admin:org` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization - API method documentation
func (s *Actions) ActionsUpdateSelfHostedRunnerGroupForOrg(ctx context.Context, request operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest) (*operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.PathParams)

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

	res := &operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsOrg
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsOrg = out
		}
	}

	return res, nil
}
