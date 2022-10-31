package operations

import (
"openapi/pkg/models/shared")

type TeamsAddOrUpdateMembershipForUserInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}


type TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum string

const (
    TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnumMember TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum = "member"
TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnumMaintainer TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum = "maintainer"
)


type TeamsAddOrUpdateMembershipForUserInOrgRequestBody struct {
    Role *TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum `json:"role,omitempty"`
    
}

type TeamsAddOrUpdateMembershipForUserInOrgRequest struct {
    PathParams TeamsAddOrUpdateMembershipForUserInOrgPathParams 
    Request *TeamsAddOrUpdateMembershipForUserInOrgRequestBody `request:"mediaType=application/json"`
    
}

type TeamsAddOrUpdateMembershipForUserInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    TeamMembership *shared.TeamMembership 
    
}

