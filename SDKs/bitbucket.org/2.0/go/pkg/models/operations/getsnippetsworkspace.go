package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspacePathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceRoleEnum string

const (
	GetSnippetsWorkspaceRoleEnumOwner       GetSnippetsWorkspaceRoleEnum = "owner"
	GetSnippetsWorkspaceRoleEnumContributor GetSnippetsWorkspaceRoleEnum = "contributor"
	GetSnippetsWorkspaceRoleEnumMember      GetSnippetsWorkspaceRoleEnum = "member"
)

type GetSnippetsWorkspaceQueryParams struct {
	Role *GetSnippetsWorkspaceRoleEnum `queryParam:"style=form,explode=true,name=role"`
}

type GetSnippetsWorkspaceSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceRequest struct {
	PathParams  GetSnippetsWorkspacePathParams
	QueryParams GetSnippetsWorkspaceQueryParams
	Security    GetSnippetsWorkspaceSecurity
}

type GetSnippetsWorkspaceResponse struct {
	ContentType       string
	StatusCode        int64
	Error             map[string]interface{}
	PaginatedSnippets *shared.PaginatedSnippets
}
