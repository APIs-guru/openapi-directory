package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
