package operations

import (
	"openapi/pkg/models/shared"
)

type PostSnippetsWorkspacePathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostSnippetsWorkspaceSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostSnippetsWorkspaceSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostSnippetsWorkspaceSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostSnippetsWorkspaceSecurity struct {
	Option1 *PostSnippetsWorkspaceSecurityOption1 `security:"option"`
	Option2 *PostSnippetsWorkspaceSecurityOption2 `security:"option"`
	Option3 *PostSnippetsWorkspaceSecurityOption3 `security:"option"`
}

type PostSnippetsWorkspaceRequest struct {
	PathParams PostSnippetsWorkspacePathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostSnippetsWorkspaceSecurity
}

type PostSnippetsWorkspaceResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Snippet     map[string]interface{}
}
