package operations

import (
"openapi/pkg/models/shared")

type TeamsAddOrUpdateMembershipForUserPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}


type TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum string

const (
    TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnumMember TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum = "member"
TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnumMaintainer TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum = "maintainer"
)


type TeamsAddOrUpdateMembershipForUserRequestBody struct {
    Role *TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum `json:"role,omitempty"`
    
}

type TeamsAddOrUpdateMembershipForUserRequest struct {
    PathParams TeamsAddOrUpdateMembershipForUserPathParams 
    Request *TeamsAddOrUpdateMembershipForUserRequestBody `request:"mediaType=application/json"`
    
}

type TeamsAddOrUpdateMembershipForUserResponse struct {
    ContentType string 
    StatusCode int64 
    TeamMembership *shared.TeamMembership 
    
}

