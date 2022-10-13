package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSnippetsWorkspaceEncodedIDNodeIDPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	NodeID    string `pathParam:"style=simple,explode=false,name=node_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteSnippetsWorkspaceEncodedIDNodeIDSecurity struct {
	Option1 *DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption1 `security:"option"`
	Option2 *DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption2 `security:"option"`
	Option3 *DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption3 `security:"option"`
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
