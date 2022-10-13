package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDWatchPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDWatchSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsWorkspaceEncodedIDWatchSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsWorkspaceEncodedIDWatchSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDWatchSecurity struct {
	Option1 *GetSnippetsWorkspaceEncodedIDWatchSecurityOption1 `security:"option"`
	Option2 *GetSnippetsWorkspaceEncodedIDWatchSecurityOption2 `security:"option"`
	Option3 *GetSnippetsWorkspaceEncodedIDWatchSecurityOption3 `security:"option"`
}

type GetSnippetsWorkspaceEncodedIDWatchRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDWatchPathParams
	Security   GetSnippetsWorkspaceEncodedIDWatchSecurity
}

type GetSnippetsWorkspaceEncodedIDWatchResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	PaginatedUsers *shared.PaginatedUsers
}
