package operations

import (
"openapi/pkg/models/shared")


type GetTeamsRoleEnum string

const (
    GetTeamsRoleEnumAdmin GetTeamsRoleEnum = "admin"
GetTeamsRoleEnumContributor GetTeamsRoleEnum = "contributor"
GetTeamsRoleEnumMember GetTeamsRoleEnum = "member"
)


type GetTeamsQueryParams struct {
    Role *GetTeamsRoleEnum `queryParam:"style=form,explode=true,name=role"`
    
}

type GetTeamsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTeamsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetTeamsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsSecurity struct {
    Option1 *GetTeamsSecurityOption1 `security:"option"`
    Option2 *GetTeamsSecurityOption2 `security:"option"`
    Option3 *GetTeamsSecurityOption3 `security:"option"`
    
}

type GetTeamsRequest struct {
    QueryParams GetTeamsQueryParams 
    Security GetTeamsSecurity 
    
}

type GetTeamsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedTeams *shared.PaginatedTeams 
    
}

