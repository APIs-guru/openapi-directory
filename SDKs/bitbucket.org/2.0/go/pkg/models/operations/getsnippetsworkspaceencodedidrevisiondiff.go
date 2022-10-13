package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDRevisionDiffPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Revision  string `pathParam:"style=simple,explode=false,name=revision"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDRevisionDiffQueryParams struct {
	Path *string `queryParam:"style=form,explode=true,name=path"`
}

type GetSnippetsWorkspaceEncodedIDRevisionDiffSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsWorkspaceEncodedIDRevisionDiffSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsWorkspaceEncodedIDRevisionDiffSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDRevisionDiffSecurity struct {
	Option1 *GetSnippetsWorkspaceEncodedIDRevisionDiffSecurityOption1 `security:"option"`
	Option2 *GetSnippetsWorkspaceEncodedIDRevisionDiffSecurityOption2 `security:"option"`
	Option3 *GetSnippetsWorkspaceEncodedIDRevisionDiffSecurityOption3 `security:"option"`
}

type GetSnippetsWorkspaceEncodedIDRevisionDiffRequest struct {
	PathParams  GetSnippetsWorkspaceEncodedIDRevisionDiffPathParams
	QueryParams GetSnippetsWorkspaceEncodedIDRevisionDiffQueryParams
	Security    GetSnippetsWorkspaceEncodedIDRevisionDiffSecurity
}

type GetSnippetsWorkspaceEncodedIDRevisionDiffResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
