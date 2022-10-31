package operations

import (
"openapi/pkg/models/shared")

type TeamsListMembersLegacyPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}


type TeamsListMembersLegacyRoleEnum string

const (
    TeamsListMembersLegacyRoleEnumMember TeamsListMembersLegacyRoleEnum = "member"
TeamsListMembersLegacyRoleEnumMaintainer TeamsListMembersLegacyRoleEnum = "maintainer"
TeamsListMembersLegacyRoleEnumAll TeamsListMembersLegacyRoleEnum = "all"
)


type TeamsListMembersLegacyQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Role *TeamsListMembersLegacyRoleEnum `queryParam:"style=form,explode=true,name=role"`
    
}

type TeamsListMembersLegacyRequest struct {
    PathParams TeamsListMembersLegacyPathParams 
    QueryParams TeamsListMembersLegacyQueryParams 
    
}

type TeamsListMembersLegacyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    SimpleUsers []shared.SimpleUser 
    
}

