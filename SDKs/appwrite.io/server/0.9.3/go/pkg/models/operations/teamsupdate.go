package operations

import (
"openapi/pkg/models/shared")

type TeamsUpdatePathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type TeamsUpdateRequestBody struct {
    Name string `json:"name"`
    
}

type TeamsUpdateSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type TeamsUpdateRequest struct {
    PathParams TeamsUpdatePathParams 
    Request *TeamsUpdateRequestBody `request:"mediaType=application/json"`
    Security TeamsUpdateSecurity 
    
}

type TeamsUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    Team *shared.Team 
    
}

