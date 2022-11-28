package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDFilesPathPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Path      string `pathParam:"style=simple,explode=false,name=path"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDFilesPathSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDFilesPathRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDFilesPathPathParams
	Security   GetSnippetsWorkspaceEncodedIDFilesPathSecurity
}

type GetSnippetsWorkspaceEncodedIDFilesPathResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
}
