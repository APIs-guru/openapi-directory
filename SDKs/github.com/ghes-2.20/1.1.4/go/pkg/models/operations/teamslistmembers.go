package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListMembersPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListMembersRoleEnum string

const (
	TeamsListMembersRoleEnumMember     TeamsListMembersRoleEnum = "member"
	TeamsListMembersRoleEnumMaintainer TeamsListMembersRoleEnum = "maintainer"
	TeamsListMembersRoleEnumAll        TeamsListMembersRoleEnum = "all"
)

type TeamsListMembersQueryParams struct {
	Page    *int64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                    `queryParam:"style=form,explode=true,name=per_page"`
	Role    *TeamsListMembersRoleEnum `queryParam:"style=form,explode=true,name=role"`
}

type TeamsListMembersRequest struct {
	PathParams  TeamsListMembersPathParams
	QueryParams TeamsListMembersQueryParams
}

type TeamsListMembersResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	SimpleUsers []shared.SimpleUser
}
