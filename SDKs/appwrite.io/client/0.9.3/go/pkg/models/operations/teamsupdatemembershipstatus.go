package operations

import (
"openapi/pkg/models/shared")

type TeamsUpdateMembershipStatusPathParams struct {
    MembershipID string `pathParam:"style=simple,explode=false,name=membershipId"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type TeamsUpdateMembershipStatusRequestBody struct {
    Secret string `json:"secret"`
    UserID string `json:"userId"`
    
}

type TeamsUpdateMembershipStatusSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type TeamsUpdateMembershipStatusRequest struct {
    PathParams TeamsUpdateMembershipStatusPathParams 
    Request *TeamsUpdateMembershipStatusRequestBody `request:"mediaType=application/json"`
    Security TeamsUpdateMembershipStatusSecurity 
    
}

type TeamsUpdateMembershipStatusResponse struct {
    ContentType string 
    StatusCode int64 
    Membership *shared.Membership 
    
}

