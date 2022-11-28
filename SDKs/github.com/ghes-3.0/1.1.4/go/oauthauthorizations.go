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

type OauthAuthorizations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOauthAuthorizations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *OauthAuthorizations {
	return &OauthAuthorizations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// OauthAuthorizationsCreateAuthorization - Create a new authorization
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
//
// **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
//
// Creates OAuth tokens using [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
//
// To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.
//
// You can also create tokens on GitHub Enterprise Server from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).
//
// Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#create-a-new-authorization - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsCreateAuthorization(ctx context.Context, request operations.OauthAuthorizationsCreateAuthorizationRequest) (*operations.OauthAuthorizationsCreateAuthorizationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/authorizations"

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

	res := &operations.OauthAuthorizationsCreateAuthorizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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
	case httpRes.StatusCode == 410:
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

// OauthAuthorizationsDeleteAuthorization - Delete an authorization
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#delete-an-authorization - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsDeleteAuthorization(ctx context.Context, request operations.OauthAuthorizationsDeleteAuthorizationRequest) (*operations.OauthAuthorizationsDeleteAuthorizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/authorizations/{authorization_id}", request.PathParams)

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

	res := &operations.OauthAuthorizationsDeleteAuthorizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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
	}

	return res, nil
}

// OauthAuthorizationsDeleteGrant - Delete a grant
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
//
// Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#delete-a-grant - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsDeleteGrant(ctx context.Context, request operations.OauthAuthorizationsDeleteGrantRequest) (*operations.OauthAuthorizationsDeleteGrantResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/applications/grants/{grant_id}", request.PathParams)

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

	res := &operations.OauthAuthorizationsDeleteGrantResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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
	}

	return res, nil
}

// OauthAuthorizationsGetAuthorization - Get a single authorization
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#get-a-single-authorization - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsGetAuthorization(ctx context.Context, request operations.OauthAuthorizationsGetAuthorizationRequest) (*operations.OauthAuthorizationsGetAuthorizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/authorizations/{authorization_id}", request.PathParams)

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

	res := &operations.OauthAuthorizationsGetAuthorizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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
	}

	return res, nil
}

// OauthAuthorizationsGetGrant - Get a single grant
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#get-a-single-grant - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsGetGrant(ctx context.Context, request operations.OauthAuthorizationsGetGrantRequest) (*operations.OauthAuthorizationsGetGrantResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/applications/grants/{grant_id}", request.PathParams)

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

	res := &operations.OauthAuthorizationsGetGrantResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ApplicationGrant
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ApplicationGrant = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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
	}

	return res, nil
}

// OauthAuthorizationsGetOrCreateAuthorizationForApp - Get-or-create an authorization for a specific app
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
//
// **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
//
// Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
//
// If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
//
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsGetOrCreateAuthorizationForApp(ctx context.Context, request operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequest) (*operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/authorizations/clients/{client_id}", request.PathParams)

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

	res := &operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
		}
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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

// OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint - Get-or-create an authorization for a specific app and fingerprint
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
//
// **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
//
// This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
//
// If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(ctx context.Context, request operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest) (*operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/authorizations/clients/{client_id}/{fingerprint}", request.PathParams)

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

	res := &operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
		}
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
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

// OauthAuthorizationsListAuthorizations - List your authorizations
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#list-your-authorizations - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsListAuthorizations(ctx context.Context, request operations.OauthAuthorizationsListAuthorizationsRequest) (*operations.OauthAuthorizationsListAuthorizationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/authorizations"

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

	res := &operations.OauthAuthorizationsListAuthorizationsResponse{
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
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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
	}

	return res, nil
}

// OauthAuthorizationsListGrants - List your grants
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
//
// You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#list-your-grants - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsListGrants(ctx context.Context, request operations.OauthAuthorizationsListGrantsRequest) (*operations.OauthAuthorizationsListGrantsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/applications/grants"

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

	res := &operations.OauthAuthorizationsListGrantsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ApplicationGrant
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ApplicationGrants = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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
	}

	return res, nil
}

// OauthAuthorizationsUpdateAuthorization - Update an existing authorization
// **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.0/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
//
// If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
//
// You can only send one of these scope keys at a time.
// https://docs.github.com/enterprise-server@3.0/rest/reference/oauth-authorizations#update-an-existing-authorization - API method documentation
func (s *OauthAuthorizations) OauthAuthorizationsUpdateAuthorization(ctx context.Context, request operations.OauthAuthorizationsUpdateAuthorizationRequest) (*operations.OauthAuthorizationsUpdateAuthorizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/authorizations/{authorization_id}", request.PathParams)

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

	res := &operations.OauthAuthorizationsUpdateAuthorizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorization
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorization = out
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
