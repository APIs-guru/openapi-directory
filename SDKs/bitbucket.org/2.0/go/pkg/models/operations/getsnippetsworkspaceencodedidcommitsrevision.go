package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDCommitsRevisionPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Revision  string `pathParam:"style=simple,explode=false,name=revision"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurity struct {
	Option1 *GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption1 `security:"option"`
	Option2 *GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption2 `security:"option"`
	Option3 *GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption3 `security:"option"`
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
