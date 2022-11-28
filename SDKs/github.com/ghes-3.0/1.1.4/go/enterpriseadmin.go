package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type EnterpriseAdmin struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEnterpriseAdmin(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EnterpriseAdmin {
	return &EnterpriseAdmin{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// EnterpriseAdminAddAuthorizedSSHKey - Add an authorized SSH key
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#add-an-authorized-ssh-key - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminAddAuthorizedSSHKey(ctx context.Context, request operations.EnterpriseAdminAddAuthorizedSSHKeyRequest) (*operations.EnterpriseAdminAddAuthorizedSSHKeyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/settings/authorized-keys"

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

	res := &operations.EnterpriseAdminAddAuthorizedSSHKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SSHKey
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SSHKeys = out
		}
	}

	return res, nil
}

// EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
// Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise - Add a self-hosted runner to a group for an enterprise
// Adds a self-hosted runner to a runner group configured in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise`
// scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest) (*operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminCreateEnterpriseServerLicense - Create a GitHub license
// When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license:
//
// Note that you need to POST to [`/setup/api/configure`](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
//
// When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
//
// 1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
// 2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
//
// For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-settings).
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-github-enterprise-server-license - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateEnterpriseServerLicense(ctx context.Context, request operations.EnterpriseAdminCreateEnterpriseServerLicenseRequest) (*operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/start"

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

	res := &operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	}

	return res, nil
}

// EnterpriseAdminCreateGlobalWebhook - Create a global webhook
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-global-webhook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateGlobalWebhook(ctx context.Context, request operations.EnterpriseAdminCreateGlobalWebhookRequest) (*operations.EnterpriseAdminCreateGlobalWebhookResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/hooks"

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminCreateGlobalWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GlobalHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GlobalHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreateImpersonationOAuthToken - Create an impersonation OAuth token
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-an-impersonation-oauth-token - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateImpersonationOAuthToken(ctx context.Context, request operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest) (*operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/users/{username}/authorizations", request.PathParams)

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

	res := &operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreateOrg - Create an organization
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-an-organization - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateOrg(ctx context.Context, request operations.EnterpriseAdminCreateOrgRequest) (*operations.EnterpriseAdminCreateOrgResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/organizations"

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

	res := &operations.EnterpriseAdminCreateOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrganizationSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationSimple = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreatePreReceiveEnvironment - Create a pre-receive environment
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-pre-receive-environment - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreatePreReceiveEnvironment(ctx context.Context, request operations.EnterpriseAdminCreatePreReceiveEnvironmentRequest) (*operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/pre-receive-environments"

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

	res := &operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveEnvironment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveEnvironment = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreatePreReceiveHook - Create a pre-receive hook
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-pre-receive-hook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreatePreReceiveHook(ctx context.Context, request operations.EnterpriseAdminCreatePreReceiveHookRequest) (*operations.EnterpriseAdminCreatePreReceiveHookResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/pre-receive-hooks"

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

	res := &operations.EnterpriseAdminCreatePreReceiveHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreateRegistrationTokenForEnterprise - Create a registration token for an enterprise
// Returns a token that you can pass to the `config` script. The token expires after one hour.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
//
// #### Example using registration token
//
// Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
//
// ```
// ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
// ```
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateRegistrationTokenForEnterprise(ctx context.Context, request operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest) (*operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/registration-token", request.PathParams)

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

	res := &operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse{
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

// EnterpriseAdminCreateRemoveTokenForEnterprise - Create a remove token for an enterprise
// Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
//
// #### Example using remove token
//
// To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
// endpoint.
//
// ```
// ./config.sh remove --token TOKEN
// ```
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateRemoveTokenForEnterprise(ctx context.Context, request operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest) (*operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/remove-token", request.PathParams)

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

	res := &operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse{
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

// EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
// Creates a new self-hosted runner group for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest) (*operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups", request.PathParams)

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

	res := &operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsEnterprise = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreateUser - Create a user
// If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
//
// The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.
//
// If the login name or email address is already associated with an account, the server will return a `422` response.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateUser(ctx context.Context, request operations.EnterpriseAdminCreateUserRequest) (*operations.EnterpriseAdminCreateUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/users"

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

	res := &operations.EnterpriseAdminCreateUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SimpleUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SimpleUser = out
		}
	}

	return res, nil
}

// EnterpriseAdminDeleteGlobalWebhook - Delete a global webhook
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-global-webhook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteGlobalWebhook(ctx context.Context, request operations.EnterpriseAdminDeleteGlobalWebhookRequest) (*operations.EnterpriseAdminDeleteGlobalWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/hooks/{hook_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminDeleteGlobalWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeleteImpersonationOAuthToken - Delete an impersonation OAuth token
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteImpersonationOAuthToken(ctx context.Context, request operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest) (*operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/users/{username}/authorizations", request.PathParams)

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

	res := &operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeletePersonalAccessToken - Delete a personal access token
// Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-personal-access-token - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeletePersonalAccessToken(ctx context.Context, request operations.EnterpriseAdminDeletePersonalAccessTokenRequest) (*operations.EnterpriseAdminDeletePersonalAccessTokenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/tokens/{token_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminDeletePersonalAccessTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeletePreReceiveEnvironment - Delete a pre-receive environment
// If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.
//
// The possible error messages are:
//
// *   _Cannot modify or delete the default environment_
// *   _Cannot delete environment that has hooks_
// *   _Cannot delete environment when download is in progress_
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-pre-receive-environment - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeletePreReceiveEnvironment(ctx context.Context, request operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest) (*operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminDeletePreReceiveHook - Delete a pre-receive hook
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-pre-receive-hook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeletePreReceiveHook(ctx context.Context, request operations.EnterpriseAdminDeletePreReceiveHookRequest) (*operations.EnterpriseAdminDeletePreReceiveHookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminDeletePreReceiveHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeletePublicKey - Delete a public key
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-public-key - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeletePublicKey(ctx context.Context, request operations.EnterpriseAdminDeletePublicKeyRequest) (*operations.EnterpriseAdminDeletePublicKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/keys/{key_ids}", request.PathParams)

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

	res := &operations.EnterpriseAdminDeletePublicKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
// Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise(ctx context.Context, request operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest) (*operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
// Deletes a self-hosted runner group for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(ctx context.Context, request operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest) (*operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeleteUser - Delete a user
// Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
//
// You can delete any user account except your own.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteUser(ctx context.Context, request operations.EnterpriseAdminDeleteUserRequest) (*operations.EnterpriseAdminDeleteUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/users/{username}", request.PathParams)

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

	res := &operations.EnterpriseAdminDeleteUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDemoteSiteAdministrator - Demote a site administrator
// You can demote any user account except your own.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#demote-a-site-administrator - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDemoteSiteAdministrator(ctx context.Context, request operations.EnterpriseAdminDemoteSiteAdministratorRequest) (*operations.EnterpriseAdminDemoteSiteAdministratorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/site_admin", request.PathParams)

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

	res := &operations.EnterpriseAdminDemoteSiteAdministratorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
// Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminEnableOrDisableMaintenanceMode - Enable or disable maintenance mode
// The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
//
// The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminEnableOrDisableMaintenanceMode(ctx context.Context, request operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequest) (*operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/maintenance"

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

	res := &operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MaintenanceStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MaintenanceStatus = out
		}
	}

	return res, nil
}

// EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
// Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminGetAllAuthorizedSSHKeys - Get all authorized SSH keys
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-all-authorized-ssh-keys - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetAllAuthorizedSSHKeys(ctx context.Context) (*operations.EnterpriseAdminGetAllAuthorizedSSHKeysResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/settings/authorized-keys"

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

	res := &operations.EnterpriseAdminGetAllAuthorizedSSHKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SSHKey
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SSHKeys = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
// Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetAllowedActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest) (*operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.PathParams)

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

	res := &operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SelectedActions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SelectedActions = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetAnnouncement - Get the global announcement banner
// Gets the current message and expiration date of the global announcement banner in your enterprise.
func (s *EnterpriseAdmin) EnterpriseAdminGetAnnouncement(ctx context.Context) (*operations.EnterpriseAdminGetAnnouncementResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/enterprise/announcement"

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

	res := &operations.EnterpriseAdminGetAnnouncementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Announcement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Announcement = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetConfigurationStatus - Get the configuration status
// This endpoint allows you to check the status of the most recent configuration process:
//
// Note that you may need to wait several seconds after you start a process before you can check its status.
//
// The different statuses are:
//
// | Status        | Description                       |
// | ------------- | --------------------------------- |
// | `PENDING`     | The job has not started yet       |
// | `CONFIGURING` | The job is running                |
// | `DONE`        | The job has finished correctly    |
// | `FAILED`      | The job has finished unexpectedly |
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-the-configuration-status - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetConfigurationStatus(ctx context.Context) (*operations.EnterpriseAdminGetConfigurationStatusResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/configcheck"

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

	res := &operations.EnterpriseAdminGetConfigurationStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigurationStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigurationStatus = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment - Get the download status for a pre-receive environment
// In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment(ctx context.Context, request operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest) (*operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest", request.PathParams)

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

	res := &operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveEnvironmentDownloadStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveEnvironmentDownloadStatus = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
// Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetGithubActionsPermissionsEnterprise(ctx context.Context, request operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest) (*operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions", request.PathParams)

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

	res := &operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsEnterprisePermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsEnterprisePermissions = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetGlobalWebhook - Get a global webhook
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-global-webhook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetGlobalWebhook(ctx context.Context, request operations.EnterpriseAdminGetGlobalWebhookRequest) (*operations.EnterpriseAdminGetGlobalWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/hooks/{hook_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminGetGlobalWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GlobalHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GlobalHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetLicenseInformation - Get license information
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-license-information - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetLicenseInformation(ctx context.Context) (*operations.EnterpriseAdminGetLicenseInformationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/enterprise/settings/license"

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

	res := &operations.EnterpriseAdminGetLicenseInformationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LicenseInfo
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LicenseInfo = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetMaintenanceStatus - Get the maintenance status
// Check your installation's maintenance status:
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-the-maintenance-status - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetMaintenanceStatus(ctx context.Context) (*operations.EnterpriseAdminGetMaintenanceStatusResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/maintenance"

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

	res := &operations.EnterpriseAdminGetMaintenanceStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MaintenanceStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MaintenanceStatus = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetPreReceiveEnvironment - Get a pre-receive environment
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-environment - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetPreReceiveEnvironment(ctx context.Context, request operations.EnterpriseAdminGetPreReceiveEnvironmentRequest) (*operations.EnterpriseAdminGetPreReceiveEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminGetPreReceiveEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveEnvironment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveEnvironment = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetPreReceiveHook - Get a pre-receive hook
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-hook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetPreReceiveHook(ctx context.Context, request operations.EnterpriseAdminGetPreReceiveHookRequest) (*operations.EnterpriseAdminGetPreReceiveHookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminGetPreReceiveHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetPreReceiveHookForOrg - Get a pre-receive hook for an organization
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetPreReceiveHookForOrg(ctx context.Context, request operations.EnterpriseAdminGetPreReceiveHookForOrgRequest) (*operations.EnterpriseAdminGetPreReceiveHookForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminGetPreReceiveHookForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgPreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetPreReceiveHookForRepo - Get a pre-receive hook for a repository
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetPreReceiveHookForRepo(ctx context.Context, request operations.EnterpriseAdminGetPreReceiveHookForRepoRequest) (*operations.EnterpriseAdminGetPreReceiveHookForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminGetPreReceiveHookForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RepositoryPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepositoryPreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
// Gets a specific self-hosted runner configured in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetSelfHostedRunnerForEnterprise(ctx context.Context, request operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest) (*operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Runner
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Runner = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
// Gets a specific self-hosted runner group for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest) (*operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsEnterprise = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetSettings - Get settings
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-settings - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetSettings(ctx context.Context) (*operations.EnterpriseAdminGetSettingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/settings"

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

	res := &operations.EnterpriseAdminGetSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EnterpriseSettings
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseSettings = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetTypeStats - Get statistics
// There are a variety of types to choose from:
//
// | Type         | Description                                                                                         |
// | ------------ | --------------------------------------------------------------------------------------------------- |
// | `issues`     | The number of open and closed issues.                                                               |
// | `hooks`      | The number of active and inactive hooks.                                                            |
// | `milestones` | The number of open and closed milestones.                                                           |
// | `orgs`       | The number of organizations, teams, team members, and disabled organizations.                       |
// | `comments`   | The number of comments on issues, pull requests, commits, and gists.                                |
// | `pages`      | The number of GitHub Pages sites.                                                                   |
// | `users`      | The number of suspended and admin users.                                                            |
// | `gists`      | The number of private and public gists.                                                             |
// | `pulls`      | The number of merged, mergeable, and unmergeable pull requests.                                     |
// | `repos`      | The number of organization-owned repositories, root repositories, forks, pushed commits, and wikis. |
// | `all`        | All of the statistics listed above.                                                                 |
//
// These statistics are cached and will be updated approximately every 10 minutes.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-statistics - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetTypeStats(ctx context.Context, request operations.EnterpriseAdminGetTypeStatsRequest) (*operations.EnterpriseAdminGetTypeStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprise/stats/{type}", request.PathParams)

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

	res := &operations.EnterpriseAdminGetTypeStatsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminGetTypeStats200ApplicationJSONAnyOf = out
		}
	}

	return res, nil
}

// EnterpriseAdminListGlobalWebhooks - List global webhooks
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-global-webhooks - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListGlobalWebhooks(ctx context.Context, request operations.EnterpriseAdminListGlobalWebhooksRequest) (*operations.EnterpriseAdminListGlobalWebhooksResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/hooks"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListGlobalWebhooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GlobalHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GlobalHooks = out
		}
	}

	return res, nil
}

// EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
// Lists the organizations with access to a self-hosted runner group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.PathParams)

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

	res := &operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListPersonalAccessTokens - List personal access tokens
// Lists personal access tokens for all users, including admin users.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-personal-access-tokens - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListPersonalAccessTokens(ctx context.Context, request operations.EnterpriseAdminListPersonalAccessTokensRequest) (*operations.EnterpriseAdminListPersonalAccessTokensResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/tokens"

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

	res := &operations.EnterpriseAdminListPersonalAccessTokensResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorizations = out
		}
	}

	return res, nil
}

// EnterpriseAdminListPreReceiveEnvironments - List pre-receive environments
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-environments - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListPreReceiveEnvironments(ctx context.Context, request operations.EnterpriseAdminListPreReceiveEnvironmentsRequest) (*operations.EnterpriseAdminListPreReceiveEnvironmentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/pre-receive-environments"

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

	res := &operations.EnterpriseAdminListPreReceiveEnvironmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.PreReceiveEnvironment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveEnvironments = out
		}
	}

	return res, nil
}

// EnterpriseAdminListPreReceiveHooks - List pre-receive hooks
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-hooks - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListPreReceiveHooks(ctx context.Context, request operations.EnterpriseAdminListPreReceiveHooksRequest) (*operations.EnterpriseAdminListPreReceiveHooksResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/pre-receive-hooks"

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

	res := &operations.EnterpriseAdminListPreReceiveHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.PreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveHooks = out
		}
	}

	return res, nil
}

// EnterpriseAdminListPreReceiveHooksForOrg - List pre-receive hooks for an organization
// List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListPreReceiveHooksForOrg(ctx context.Context, request operations.EnterpriseAdminListPreReceiveHooksForOrgRequest) (*operations.EnterpriseAdminListPreReceiveHooksForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/pre-receive-hooks", request.PathParams)

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

	res := &operations.EnterpriseAdminListPreReceiveHooksForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.OrgPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgPreReceiveHooks = out
		}
	}

	return res, nil
}

// EnterpriseAdminListPreReceiveHooksForRepo - List pre-receive hooks for a repository
// List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListPreReceiveHooksForRepo(ctx context.Context, request operations.EnterpriseAdminListPreReceiveHooksForRepoRequest) (*operations.EnterpriseAdminListPreReceiveHooksForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/pre-receive-hooks", request.PathParams)

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

	res := &operations.EnterpriseAdminListPreReceiveHooksForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RepositoryPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepositoryPreReceiveHooks = out
		}
	}

	return res, nil
}

// EnterpriseAdminListPublicKeys - List public keys
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-public-keys - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListPublicKeys(ctx context.Context, request operations.EnterpriseAdminListPublicKeysRequest) (*operations.EnterpriseAdminListPublicKeysResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/admin/keys"

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

	res := &operations.EnterpriseAdminListPublicKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.EnterprisePublicKey
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterprisePublicKeys = out
		}
	}

	return res, nil
}

// EnterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
// Lists binaries for the runner application that you can download and run.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListRunnerApplicationsForEnterprise(ctx context.Context, request operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest) (*operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/downloads", request.PathParams)

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

	res := &operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse{
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

// EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
// Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", request.PathParams)

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

	res := &operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
// Lists all self-hosted runner groups for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest) (*operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups", request.PathParams)

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

	res := &operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
// Lists all self-hosted runners configured for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelfHostedRunnersForEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest) (*operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners", request.PathParams)

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

	res := &operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
// Lists the self-hosted runners that are in a specific enterprise group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest) (*operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.PathParams)

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

	res := &operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminPingGlobalWebhook - Ping a global webhook
// This will trigger a [ping event](https://docs.github.com/enterprise-server@3.0/webhooks/#ping-event) to be sent to the webhook.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#ping-a-global-webhook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminPingGlobalWebhook(ctx context.Context, request operations.EnterpriseAdminPingGlobalWebhookRequest) (*operations.EnterpriseAdminPingGlobalWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/hooks/{hook_id}/pings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminPingGlobalWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminPromoteUserToBeSiteAdministrator - Promote a user to be a site administrator
// Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminPromoteUserToBeSiteAdministrator(ctx context.Context, request operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest) (*operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/site_admin", request.PathParams)

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

	res := &operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminRemoveAnnouncement - Remove the global announcement banner
// Removes the global announcement banner in your enterprise.
func (s *EnterpriseAdmin) EnterpriseAdminRemoveAnnouncement(ctx context.Context) (*operations.EnterpriseAdminRemoveAnnouncementResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/enterprise/announcement"

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

	res := &operations.EnterpriseAdminRemoveAnnouncementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminRemoveAuthorizedSSHKey - Remove an authorized SSH key
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-an-authorized-ssh-key - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminRemoveAuthorizedSSHKey(ctx context.Context, request operations.EnterpriseAdminRemoveAuthorizedSSHKeyRequest) (*operations.EnterpriseAdminRemoveAuthorizedSSHKeyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/settings/authorized-keys"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.EnterpriseAdminRemoveAuthorizedSSHKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SSHKey
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SSHKeys = out
		}
	}

	return res, nil
}

// EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
// Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminRemovePreReceiveHookEnforcementForOrg - Remove pre-receive hook enforcement for an organization
// Removes any overrides for this hook at the org level for this org.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminRemovePreReceiveHookEnforcementForOrg(ctx context.Context, request operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest) (*operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgPreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminRemovePreReceiveHookEnforcementForRepo - Remove pre-receive hook enforcement for a repository
// Deletes any overridden enforcement on this repository for the specified hook.
//
// Responds with effective values inherited from owner and/or global level.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminRemovePreReceiveHookEnforcementForRepo(ctx context.Context, request operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest) (*operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RepositoryPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepositoryPreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
// Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest) (*operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
// Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetAllowedActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest) (*operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.PathParams)

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

	res := &operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetAnnouncement - Set the global announcement banner
// Sets the message and expiration time for the global announcement banner in your enterprise.
func (s *EnterpriseAdmin) EnterpriseAdminSetAnnouncement(ctx context.Context, request operations.EnterpriseAdminSetAnnouncementRequest) (*operations.EnterpriseAdminSetAnnouncementResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/enterprise/announcement"

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

	res := &operations.EnterpriseAdminSetAnnouncementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Announcement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Announcement = out
		}
	}

	return res, nil
}

// EnterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
// Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetGithubActionsPermissionsEnterprise(ctx context.Context, request operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest) (*operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions", request.PathParams)

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

	res := &operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
// Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.PathParams)

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

	res := &operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
// Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", request.PathParams)

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

	res := &operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
// Replaces the list of self-hosted runners that are part of an enterprise runner group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest) (*operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.PathParams)

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

	res := &operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetSettings - Set settings
// For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-settings).
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-settings - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetSettings(ctx context.Context, request operations.EnterpriseAdminSetSettingsRequest) (*operations.EnterpriseAdminSetSettingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/settings"

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

	res := &operations.EnterpriseAdminSetSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminStartConfigurationProcess - Start a configuration process
// This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#start-a-configuration-process - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminStartConfigurationProcess(ctx context.Context) (*operations.EnterpriseAdminStartConfigurationProcessResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/configure"

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

	res := &operations.EnterpriseAdminStartConfigurationProcessResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	}

	return res, nil
}

// EnterpriseAdminStartPreReceiveEnvironmentDownload - Start a pre-receive environment download
// Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.
//
// If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.
//
// The possible error messages are:
//
// * _Cannot modify or delete the default environment_
// * _Can not start a new download when a download is in progress_
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#start-a-pre-receive-environment-download - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminStartPreReceiveEnvironmentDownload(ctx context.Context, request operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest) (*operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads", request.PathParams)

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

	res := &operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveEnvironmentDownloadStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveEnvironmentDownloadStatus = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminSuspendUser - Suspend a user
// If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
//
// You can suspend any user account except your own.
//
// Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#suspend-a-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSuspendUser(ctx context.Context, request operations.EnterpriseAdminSuspendUserRequest) (*operations.EnterpriseAdminSuspendUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/suspended", request.PathParams)

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

	res := &operations.EnterpriseAdminSuspendUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSyncLdapMappingForTeam - Sync LDAP mapping for a team
// Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSyncLdapMappingForTeam(ctx context.Context, request operations.EnterpriseAdminSyncLdapMappingForTeamRequest) (*operations.EnterpriseAdminSyncLdapMappingForTeamResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/ldap/teams/{team_id}/sync", request.PathParams)

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

	res := &operations.EnterpriseAdminSyncLdapMappingForTeamResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminSyncLdapMappingForUser - Sync LDAP mapping for a user
// Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSyncLdapMappingForUser(ctx context.Context, request operations.EnterpriseAdminSyncLdapMappingForUserRequest) (*operations.EnterpriseAdminSyncLdapMappingForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/ldap/users/{username}/sync", request.PathParams)

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

	res := &operations.EnterpriseAdminSyncLdapMappingForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminUnsuspendUser - Unsuspend a user
// If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#unsuspend-a-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUnsuspendUser(ctx context.Context, request operations.EnterpriseAdminUnsuspendUserRequest) (*operations.EnterpriseAdminUnsuspendUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/suspended", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.EnterpriseAdminUnsuspendUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminUpdateGlobalWebhook - Update a global webhook
// Parameters that are not provided will be overwritten with the default value or removed if no default exists.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-global-webhook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateGlobalWebhook(ctx context.Context, request operations.EnterpriseAdminUpdateGlobalWebhookRequest) (*operations.EnterpriseAdminUpdateGlobalWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/hooks/{hook_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminUpdateGlobalWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GlobalHook2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GlobalHook2 = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdateLdapMappingForTeam - Update LDAP mapping for a team
// Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@3.0/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
//
// If you pass the `hellcat-preview` media type, you can also update the LDAP mapping of a child team.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateLdapMappingForTeam(ctx context.Context, request operations.EnterpriseAdminUpdateLdapMappingForTeamRequest) (*operations.EnterpriseAdminUpdateLdapMappingForTeamResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/ldap/teams/{team_id}/mapping", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdateLdapMappingForTeamResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LdapMappingTeam
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LdapMappingTeam = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdateLdapMappingForUser - Update LDAP mapping for a user
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateLdapMappingForUser(ctx context.Context, request operations.EnterpriseAdminUpdateLdapMappingForUserRequest) (*operations.EnterpriseAdminUpdateLdapMappingForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/ldap/users/{username}/mapping", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdateLdapMappingForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LdapMappingUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LdapMappingUser = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdateOrgName - Update an organization name
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-an-organization-name - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateOrgName(ctx context.Context, request operations.EnterpriseAdminUpdateOrgNameRequest) (*operations.EnterpriseAdminUpdateOrgNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/organizations/{org}", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdateOrgNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminUpdateOrgName202ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminUpdateOrgName202ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdatePreReceiveEnvironment - Update a pre-receive environment
// You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-pre-receive-environment - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdatePreReceiveEnvironment(ctx context.Context, request operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest) (*operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveEnvironment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveEnvironment = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdatePreReceiveHook - Update a pre-receive hook
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-pre-receive-hook - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdatePreReceiveHook(ctx context.Context, request operations.EnterpriseAdminUpdatePreReceiveHookRequest) (*operations.EnterpriseAdminUpdatePreReceiveHookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdatePreReceiveHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg - Update pre-receive hook enforcement for an organization
// For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg(ctx context.Context, request operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest) (*operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgPreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo - Update pre-receive hook enforcement for a repository
// For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo(ctx context.Context, request operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest) (*operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RepositoryPreReceiveHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepositoryPreReceiveHook = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
// Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest) (*operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsEnterprise = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdateUsernameForUser - Update the username for a user
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-the-username-for-a-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateUsernameForUser(ctx context.Context, request operations.EnterpriseAdminUpdateUsernameForUserRequest) (*operations.EnterpriseAdminUpdateUsernameForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/admin/users/{username}", request.PathParams)

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

	res := &operations.EnterpriseAdminUpdateUsernameForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminUpdateUsernameForUser202ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminUpdateUsernameForUser202ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpgradeLicense - Upgrade a license
// This API upgrades your license and also triggers the configuration process:
// https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#upgrade-a-license - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpgradeLicense(ctx context.Context, request operations.EnterpriseAdminUpgradeLicenseRequest) (*operations.EnterpriseAdminUpgradeLicenseResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/api/upgrade"

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

	res := &operations.EnterpriseAdminUpgradeLicenseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	}

	return res, nil
}
