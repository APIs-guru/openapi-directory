package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspacePathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRoleEnum string

const (
	GetRepositoriesWorkspaceRoleEnumAdmin       GetRepositoriesWorkspaceRoleEnum = "admin"
	GetRepositoriesWorkspaceRoleEnumContributor GetRepositoriesWorkspaceRoleEnum = "contributor"
	GetRepositoriesWorkspaceRoleEnumMember      GetRepositoriesWorkspaceRoleEnum = "member"
	GetRepositoriesWorkspaceRoleEnumOwner       GetRepositoriesWorkspaceRoleEnum = "owner"
)

type GetRepositoriesWorkspaceQueryParams struct {
	Q    *string                           `queryParam:"style=form,explode=true,name=q"`
	Role *GetRepositoriesWorkspaceRoleEnum `queryParam:"style=form,explode=true,name=role"`
	Sort *string                           `queryParam:"style=form,explode=true,name=sort"`
}

type GetRepositoriesWorkspaceSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRequest struct {
	PathParams  GetRepositoriesWorkspacePathParams
	QueryParams GetRepositoriesWorkspaceQueryParams
	Security    GetRepositoriesWorkspaceSecurity
}

type GetRepositoriesWorkspaceResponse struct {
	ContentType           string
	StatusCode            int64
	Error                 map[string]interface{}
	PaginatedRepositories *shared.PaginatedRepositories
}
