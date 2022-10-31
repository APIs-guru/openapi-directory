package operations

import (
"openapi/pkg/models/shared")

type TeamsUpdateMembershipRolesPathParams struct {
    MembershipID string `pathParam:"style=simple,explode=false,name=membershipId"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type TeamsUpdateMembershipRolesRequestBody struct {
    Roles []string `json:"roles"`
    
}

type TeamsUpdateMembershipRolesSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type TeamsUpdateMembershipRolesRequest struct {
    PathParams TeamsUpdateMembershipRolesPathParams 
    Request *TeamsUpdateMembershipRolesRequestBody `request:"mediaType=application/json"`
    Security TeamsUpdateMembershipRolesSecurity 
    
}

type TeamsUpdateMembershipRolesResponse struct {
    ContentType string 
    StatusCode int64 
    Membership *shared.Membership 
    
}

