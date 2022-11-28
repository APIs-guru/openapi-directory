package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDCommitsRevisionPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Revision  string `pathParam:"style=simple,explode=false,name=revision"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRevisionRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDCommitsRevisionPathParams
	Security   GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurity
}

type GetSnippetsWorkspaceEncodedIDCommitsRevisionResponse struct {
	ContentType   string
	StatusCode    int64
	Error         map[string]interface{}
	SnippetCommit map[string]interface{}
}
