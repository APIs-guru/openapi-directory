package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSnippetsWorkspaceEncodedIDNodeIDPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	NodeID    string `pathParam:"style=simple,explode=false,name=node_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteSnippetsWorkspaceEncodedIDNodeIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteSnippetsWorkspaceEncodedIDNodeIDRequest struct {
	PathParams DeleteSnippetsWorkspaceEncodedIDNodeIDPathParams
	Security   DeleteSnippetsWorkspaceEncodedIDNodeIDSecurity
}

type DeleteSnippetsWorkspaceEncodedIDNodeIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
