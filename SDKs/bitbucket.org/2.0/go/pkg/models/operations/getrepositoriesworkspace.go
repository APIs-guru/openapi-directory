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

type GetRepositoriesWorkspaceSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceSecurity struct {
	Option1 *GetRepositoriesWorkspaceSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceSecurityOption3 `security:"option"`
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
