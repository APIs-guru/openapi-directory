package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsWorkspaceEncodedIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsWorkspaceEncodedIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDSecurity struct {
	Option1 *GetSnippetsWorkspaceEncodedIDSecurityOption1 `security:"option"`
	Option2 *GetSnippetsWorkspaceEncodedIDSecurityOption2 `security:"option"`
	Option3 *GetSnippetsWorkspaceEncodedIDSecurityOption3 `security:"option"`
}

type GetSnippetsWorkspaceEncodedIDRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDPathParams
	Security   GetSnippetsWorkspaceEncodedIDSecurity
}

type GetSnippetsWorkspaceEncodedIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Snippet     map[string]interface{}
}
