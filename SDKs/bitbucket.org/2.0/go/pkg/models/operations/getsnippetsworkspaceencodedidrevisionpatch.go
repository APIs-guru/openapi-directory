package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Revision  string `pathParam:"style=simple,explode=false,name=revision"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams
	Security   GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
