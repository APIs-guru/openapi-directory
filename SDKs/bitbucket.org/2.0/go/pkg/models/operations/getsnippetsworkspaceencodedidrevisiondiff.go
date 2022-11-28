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

type GetSnippetsWorkspaceEncodedIDRevisionDiffSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
