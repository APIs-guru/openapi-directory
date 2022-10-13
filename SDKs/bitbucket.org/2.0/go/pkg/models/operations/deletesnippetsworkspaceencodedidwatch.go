package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSnippetsWorkspaceEncodedIDWatchPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteSnippetsWorkspaceEncodedIDWatchSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteSnippetsWorkspaceEncodedIDWatchSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteSnippetsWorkspaceEncodedIDWatchSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteSnippetsWorkspaceEncodedIDWatchSecurity struct {
	Option1 *DeleteSnippetsWorkspaceEncodedIDWatchSecurityOption1 `security:"option"`
	Option2 *DeleteSnippetsWorkspaceEncodedIDWatchSecurityOption2 `security:"option"`
	Option3 *DeleteSnippetsWorkspaceEncodedIDWatchSecurityOption3 `security:"option"`
}

type DeleteSnippetsWorkspaceEncodedIDWatchRequest struct {
	PathParams DeleteSnippetsWorkspaceEncodedIDWatchPathParams
	Security   DeleteSnippetsWorkspaceEncodedIDWatchSecurity
}

type DeleteSnippetsWorkspaceEncodedIDWatchResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	PaginatedUsers *shared.PaginatedUsers
}
