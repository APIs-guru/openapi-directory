package operations

import (
	"openapi/pkg/models/shared"
)

type PutSnippetsWorkspaceEncodedIDWatchPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutSnippetsWorkspaceEncodedIDWatchSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutSnippetsWorkspaceEncodedIDWatchRequest struct {
	PathParams PutSnippetsWorkspaceEncodedIDWatchPathParams
	Security   PutSnippetsWorkspaceEncodedIDWatchSecurity
}

type PutSnippetsWorkspaceEncodedIDWatchResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	PaginatedUsers *shared.PaginatedUsers
}
