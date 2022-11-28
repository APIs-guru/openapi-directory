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

type Syslog struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSyslog(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Syslog {
	return &Syslog{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RequestAuditNodeUserDataSyslog - Request nodes assigned users with permissions
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
//
// ### Description:
// Retrieve a list of all nodes of type room, and the room assignment users with permissions.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.
//
// ### Postcondition:
// List of rooms and their assigned users is returned.
//
// ### Further Information:
//
// ### Filtering:
// All filter fields are connected via logical conjunction (**AND**)
// Except for `userName`, `userFirstName` and  `userLastName` - these are connected via logical disjunction (**OR**)
// Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`
// Filter by user login containing `searchString_1` **OR** first name containing `searchString_2` **AND** node ID equals `2`.
//
// </details>
//
// ### Filtering options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
// | :--- | :--- | :--- | :--- | :--- |
// | `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
// | `nodeName` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
// | `nodeParentId` | Node parent ID filter | `eq` | Parent ID equals value. | `positive Integer`<br>Parent ID `0` is the root node. |
// | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
// | `userName` | Username (login) filter | `cn, eq` | Username contains / equals value. | `search String` |
// | `userFirstName` | User first name filter | `cn, eq` | User first name contains / equals value. | `search String` |
// | `userLastName` | User last name filter | `cn, eq` | User last name contains / equals value. | `search String` |
// | `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room | `eq` |  | `true or false` |
// | `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
// | `nodeHasActivitiesLog` | Activities log filter | `eq` |  | `true or false` |
//
// </details>
//
// ### Deprecated filtering options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
// | :--- | :--- | :--- | :--- | :--- |
// | <del>`nodeHasRecycleBin`</del> | Recycle bin filter<br>**Filter has no effect!** | `eq` |  | `true or false` |
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
// `nodeName:asc`
// Sort by `nodeName` ascending.
//
// </details>
//
// ### Sorting options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Description |
// | :--- | :--- |
// | `nodeId` | Node ID |
// | `nodeName` | Node name |
// | `nodeParentId` | Node parent ID |
// | `nodeSize` | Node size |
// | `nodeQuota` | Node quota |
//
// </details>
func (s *Syslog) RequestAuditNodeUserDataSyslog(ctx context.Context, request operations.RequestAuditNodeUserDataSyslogRequest) (*operations.RequestAuditNodeUserDataSyslogResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/syslog/audits/nodes"

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

	res := &operations.RequestAuditNodeUserDataSyslogResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AuditNodeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuditNodeResponses = out
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

// RequestLogOperationsSyslog - Request allowed log operations
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
//
// ### Description:
// Retrieve eventlog (audit log) operation IDs and the associated log operation description.
//
// ### Precondition:
// Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
//
// ### Postcondition:
// List of available log operations is returned.
//
// ### Further Information:
// None.
func (s *Syslog) RequestLogOperationsSyslog(ctx context.Context, request operations.RequestLogOperationsSyslogRequest) (*operations.RequestLogOperationsSyslogResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/syslog/operations"

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

	res := &operations.RequestLogOperationsSyslogResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LogOperationList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LogOperationList = out
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

// RequestSyslogEvents - Request system events
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
//
// ### Description:
// Retrieve eventlog (audit log) events.
//
// ### Precondition:
// Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
//
// ### Postcondition:
// List of audit log events is returned.
//
// ### Further Information:
// Output is limited to **500** entries.
// For more results please use filter criteria and paging (`offset` + `limit`).
//
// Allowed `Accept-Header`:
// * `Accept: application/json`
// * `Accept: text/csv`
//
// ---
//
// Sort string syntax: `FIELD_NAME:ORDER`
// `ORDER` can be `asc` or `desc`.
// Multiple sort fields are supported.
//
// <details style="padding-left: 10px">
// <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
//
// `time:desc`
// Sort by `time` descending (default sort option).
//
// </details>
//
// ### Sorting options:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | `FIELD_NAME` | Description |
// | :--- | :--- |
// | `time` | Event timestamp |
//
// </details>
func (s *Syslog) RequestSyslogEvents(ctx context.Context, request operations.RequestSyslogEventsRequest) (*operations.RequestSyslogEventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/syslog/events"

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

	res := &operations.RequestSyslogEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SyslogEventList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SyslogEventList = out
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
