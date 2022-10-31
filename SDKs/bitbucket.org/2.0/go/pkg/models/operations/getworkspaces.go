package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesRoleEnum string

const (
	GetWorkspacesRoleEnumOwner        GetWorkspacesRoleEnum = "owner"
	GetWorkspacesRoleEnumCollaborator GetWorkspacesRoleEnum = "collaborator"
	GetWorkspacesRoleEnumMember       GetWorkspacesRoleEnum = "member"
)

type GetWorkspacesQueryParams struct {
	Q    *string                `queryParam:"style=form,explode=true,name=q"`
	Role *GetWorkspacesRoleEnum `queryParam:"style=form,explode=true,name=role"`
	Sort *string                `queryParam:"style=form,explode=true,name=sort"`
}

type GetWorkspacesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetWorkspacesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetWorkspacesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspacesSecurity struct {
	Option1 *GetWorkspacesSecurityOption1 `security:"option"`
	Option2 *GetWorkspacesSecurityOption2 `security:"option"`
	Option3 *GetWorkspacesSecurityOption3 `security:"option"`
}

type GetWorkspacesRequest struct {
	QueryParams GetWorkspacesQueryParams
	Security    GetWorkspacesSecurity
}

type GetWorkspacesResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	PaginatedWorkspaces *shared.PaginatedWorkspaces
}
