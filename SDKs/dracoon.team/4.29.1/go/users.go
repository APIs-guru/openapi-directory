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

type Users struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUsers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Users {
	return &Users{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateUser - Create new user
// ### Description:
// Create a new user.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
//
// ### Postcondition:
// New user is created.
//
// ### Further Information:
// * If a user should **NOT** expire, leave `expireAt` empty.
// * All input fields are limited to **150** characters
// * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
//
// ### Authentication Method Options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Authentication Method | Option Key | Option Value |
// | :--- | :--- | :--- |
// | `basic` / `sql` | `username` | Unique user identifier |
// | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
// |  | `username` | Active Directory username according to authentication setting `userFilter` |
// | `radius` | `username` | RADIUS username |
// | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
// |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
//
// </details>
func (s *Users) CreateUser(ctx context.Context, request operations.CreateUserRequest) (*operations.CreateUserResponseOutput, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/users"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateUserResponseOutput{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserDataOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserData = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateUser400ApplicationJSONOneOf = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RemoveUser - Remove user
// ### Description:
// Delete a user.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete users</span> required.
//
// ### Postcondition:
// User is deleted.
//
// ### Further Information:
// User **CANNOT** be deleted if he is a last room administrator of any room.
func (s *Users) RemoveUser(ctx context.Context, request operations.RemoveUserRequest) (*operations.RemoveUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RemoveUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RemoveUserAttribute - Remove custom user attribute
// ### Description:
// Delete custom user attribute.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
//
// ### Postcondition:
// Custom user attribute is deleted.
//
// ### Further Information:
// * Allowed characters for keys are: `[a-zA-Z0-9_-]`
// * Characters are **case-insensitive**.
func (s *Users) RemoveUserAttribute(ctx context.Context, request operations.RemoveUserAttributeRequest) (*operations.RemoveUserAttributeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/userAttributes/{key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RemoveUserAttributeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestLastAdminRoomsUsers - Request rooms where the user is last admin
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
//
// ### Description:
// Retrieve a list of all rooms where the user is last admin (except homeroom and its subordinary rooms).
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
//
// ### Postcondition:
// List of rooms is returned.
//
// ### Further Information:
// An empty list is returned if no rooms were found where the user is last admin.
func (s *Users) RequestLastAdminRoomsUsers(ctx context.Context, request operations.RequestLastAdminRoomsUsersRequest) (*operations.RequestLastAdminRoomsUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/last_admin_rooms", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestLastAdminRoomsUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LastAdminUserRoomList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LastAdminUserRoomList = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestUser - Request user
// ### Description:
// Retrieve detailed information about a single user.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
//
// ### Postcondition:
// User information is returned.
//
// ### Further Information:
// None.
//
// ### Authentication Method Options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Authentication Method | Option Key | Option Value |
// | :--- | :--- | :--- |
// | `basic` / `sql` | `username` | Unique user identifier |
// | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
// |  | `username` | Active Directory username according to authentication setting `userFilter` |
// | `radius` | `username` | RADIUS username |
// | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
// |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
//
// </details>
func (s *Users) RequestUser(ctx context.Context, request operations.RequestUserRequest) (*operations.RequestUserResponseOutput, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}", request.PathParams)

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

	res := &operations.RequestUserResponseOutput{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserDataOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserData = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestUserAttributes - Request custom user attributes
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
//
// ### Description:
// Retrieve a list of user attributes.
//
// ### Precondition:
// None.
//
// ### Postcondition:
// List of attributes is returned.
//
// ### Further Information:
//
// ### Filtering:
// All filter fields are connected via logical conjunction (**AND**)
// Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `key:cn:searchString_1|value:cn:searchString_2`
// Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.
//
// </details>
//
// ### Filtering options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
// | :--- | :--- | :--- | :--- | :--- |
// | `key` | User attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
// | `value` | User attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
//
// </details>
//
// ---
//
// ### Sorting:
// Sort string syntax: `FIELD_NAME:ORDER`
// `ORDER` can be `asc` or `desc`.
// Multiple sort fields are supported.
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `key:asc|value:desc`
// Sort by `key` ascending **AND** by `value` descending.
//
// </details>
//
// ### Sorting options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Description |
// | :--- | :--- |
// | `key` | User attribute key |
// | `value` | User attribute value |
//
// </details>
func (s *Users) RequestUserAttributes(ctx context.Context, request operations.RequestUserAttributesRequest) (*operations.RequestUserAttributesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/userAttributes", request.PathParams)

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

	res := &operations.RequestUserAttributesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AttributesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AttributesResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestUserGroups - Request groups that user is a member of or / and can become a member
// ### Description:
// Retrieves a list of groups a user is member of and / or can become a member.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
//
// ### Postcondition:
// List of groups is returned.
//
// ### Further Information:
//
// ### Filtering:
// All filter fields are connected via logical conjunction (**AND**)
// Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `isMember:eq:false|name:cn:searchString`
// Get all groups that the user is **NOT** member of **AND** whose name is like `searchString`.
//
// </details>
//
// ### Filtering options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
// | :--- | :--- | :--- | :--- | :--- |
// | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
// | `isMember` | Filter the groups which the user is (not) member of | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
//
// </details>
func (s *Users) RequestUserGroups(ctx context.Context, request operations.RequestUserGroupsRequest) (*operations.RequestUserGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/groups", request.PathParams)

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

	res := &operations.RequestUserGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserGroupList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserGroupList = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestUserRoles - Request user's granted roles
// ### Description:
// Retrieve a list of all roles granted to a user.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
//
// ### Postcondition:
// List of granted roles is returned.
//
// ### Further Information:
// None.
func (s *Users) RequestUserRoles(ctx context.Context, request operations.RequestUserRolesRequest) (*operations.RequestUserRolesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/roles", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestUserRolesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoleList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleList = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestUsers - Request users
// ### Description:
// Returns a list of DRACOON users.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
//
// ### Postcondition:
// List of users is returned.
//
// ### Further Information:
//
// ### Filtering:
// All filter fields are connected via logical conjunction (**AND**)
// Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)
// Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`
// Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.
//
// </details>
//
// ### Filtering options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
// | :--- | :--- | :--- | :--- | :--- |
// | `email` | Email filter | `eq`, `cn` | Email contains value. | `search String` |
// | `userName` | User name filter | `eq`, `cn` | UserName contains value. | `search String` |
// | `firstName` | User first name filter | `cn` | User first name contains value. | `search String` |
// | `lastName` | User last name filter | `cn` | User last name contains value. | `search String` |
// | `isLocked` | User lock status filter | `eq` |  | `true or false` |
// | `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq` |  | `true or false`<br>default: `false` |
// | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
// | `phone` | Phone filter | `eq` | Phone equals value. | `search String` |
// | `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq` |  | `true or false` |
// | `hasRole` | User role filter<br>Depends on **effectiveRoles**.<br>For more Roles information please call `GET /roles API` | `eq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li></ul> |
//
// </details>
//
// ### Deprecated filtering options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
// | :--- | :--- | :--- | :--- | :--- |
// | <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
// | <del>`login`</del> | User login filter | `cn` | User login contains value. | `search String` |
//
// </details>
//
// ---
//
// ### Sorting:
// Sort string syntax: `FIELD_NAME:ORDER`
// `ORDER` can be `asc` or `desc`.
// Multiple sort fields are supported.
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `firstName:asc|lastLoginSuccessAt:desc`
// Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.
//
// </details>
//
// ### Sorting options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Description |
// | :--- | :--- |
// | `userName` | User name |
// | `email` | User email |
// | `firstName` | User first name |
// | `lastName` | User last name |
// | `isLocked` | User lock status |
// | `lastLoginSuccessAt` | Last successful login date |
// | `expireAt` | Expiration date |
// | `createdAt` | Creation date |
//
// </details>
//
// ### Deprecated sorting options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Description |
// | :--- | :--- |
// | <del>`gender`</del> | Gender |
// | <del>`lockStatus`</del> | User lock status |
// | <del>`login`</del> | User login |
//
// </details>
func (s *Users) RequestUsers(ctx context.Context, request operations.RequestUsersRequest) (*operations.RequestUsersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/users"

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

	res := &operations.RequestUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserList = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestUsersRooms - Request rooms granted to the user or / and rooms that can be granted
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>
//
// ### Description:
// Retrieves a list of rooms granted to the user and / or that can be granted.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
//
// ### Postcondition:
// List of rooms is returned.
//
// ### Further Information:
//
// ### Filtering:
// All filter fields are connected via logical conjunction (**AND**)
// Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `isGranted:eq:true|isLastAdmin:eq:true|name:cn:searchString`
// Get all rooms that the user is granted **AND** is last admin **AND** whose name is like `searchString`.
//
// </details>
//
// ### Filtering options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
// | :--- | :--- | :--- | :--- | :--- |
// | `name` | Room name filter | `cn` | Room name contains value. | `search String` |
// | `isGranted` | Filter the rooms which the user is (not) granted. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
// | `isLastAdmin` | Filter the rooms which the user is last room administrator.<br>Only in connection with `isGranted:eq:true` filter possible. | `eq` |  | `true` |
// | `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
//
// </details>
func (s *Users) RequestUsersRooms(ctx context.Context, request operations.RequestUsersRoomsRequest) (*operations.RequestUsersRoomsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/rooms", request.PathParams)

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

	res := &operations.RequestUsersRoomsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoomTreeDataList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoomTreeDataList = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// SetUserAttributes - Set custom user attributes
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.28.0</h3>
//
// ### Description:
// Set custom user attributes.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
//
// ### Postcondition:
// Custom user attributes are set.
//
// ### Further Information:
// Batch function.
// All existing user attributes will be deleted.
//
// * Allowed characters for keys are: `[a-zA-Z0-9_-]`
// * Characters are **case-insensitive**.
func (s *Users) SetUserAttributes(ctx context.Context, request operations.SetUserAttributesRequest) (*operations.SetUserAttributesResponseOutput, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/userAttributes", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetUserAttributesResponseOutput{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserDataOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserData = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// UpdateUser - Update user's metadata
// ### Description:
// Update user's metadata.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
//
// ### Postcondition:
// User's metadata is updated.
//
// ### Further Information:
// * If a user should **NOT** expire, leave `expireAt` empty.
// * All input fields are limited to **150** characters
// * **All** characters are allowed.
//
// ### Authentication Method Options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Authentication Method | Option Key | Option Value |
// | :--- | :--- | :--- |
// | `basic` / `sql` | `username` | Unique user identifier |
// | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
// |  | `username` | Active Directory username according to authentication setting `userFilter` |
// | `radius` | `username` | RADIUS username |
// | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
// |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
//
// </details>
func (s *Users) UpdateUser(ctx context.Context, request operations.UpdateUserRequest) (*operations.UpdateUserResponseOutput, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateUserResponseOutput{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserDataOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserData = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// UpdateUserAttributes - Add or edit custom user attributes
// ### Description:
// Add or edit custom user attributes.
// <br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
//
// ### Postcondition:
// Custom user attributes gets added or edited.
//
// ### Further Information:
// Batch function.
// If an entry exists before, it will be overwritten.
//
// * Allowed characters for keys are: `[a-zA-Z0-9_-]`
// * Characters are **case-insensitive**.
func (s *Users) UpdateUserAttributes(ctx context.Context, request operations.UpdateUserAttributesRequest) (*operations.UpdateUserAttributesResponseOutput, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/users/{user_id}/userAttributes", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateUserAttributesResponseOutput{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserDataOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserData = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}
