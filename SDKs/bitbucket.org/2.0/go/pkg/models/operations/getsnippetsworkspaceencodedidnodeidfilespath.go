package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDNodeIDFilesPathPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	NodeID    string `pathParam:"style=simple,explode=false,name=node_id"`
	Path      string `pathParam:"style=simple,explode=false,name=path"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurity struct {
	Option1 *GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption1 `security:"option"`
	Option2 *GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption2 `security:"option"`
	Option3 *GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption3 `security:"option"`
}

type GetSnippetsWorkspaceEncodedIDNodeIDFilesPathRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDNodeIDFilesPathPathParams
	Security   GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurity
}

type GetSnippetsWorkspaceEncodedIDNodeIDFilesPathResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
}
