package operations

import (
"openapi/pkg/models/shared")

type TeamsDeleteMembershipPathParams struct {
    MembershipID string `pathParam:"style=simple,explode=false,name=membershipId"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type TeamsDeleteMembershipSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type TeamsDeleteMembershipRequest struct {
    PathParams TeamsDeleteMembershipPathParams 
    Security TeamsDeleteMembershipSecurity 
    
}

type TeamsDeleteMembershipResponse struct {
    ContentType string 
    StatusCode int64 
    
}

