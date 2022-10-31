package operations

import (
"openapi/pkg/models/shared")

type TeamsCreateMembershipPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type TeamsCreateMembershipRequestBody struct {
    Email string `json:"email"`
    Name *string `json:"name,omitempty"`
    Roles []string `json:"roles"`
    URL string `json:"url"`
    
}

type TeamsCreateMembershipSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type TeamsCreateMembershipRequest struct {
    PathParams TeamsCreateMembershipPathParams 
    Request *TeamsCreateMembershipRequestBody `request:"mediaType=application/json"`
    Security TeamsCreateMembershipSecurity 
    
}

type TeamsCreateMembershipResponse struct {
    ContentType string 
    StatusCode int64 
    Membership *shared.Membership 
    
}

