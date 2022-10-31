package operations

import (
"openapi/pkg/models/shared")

type PostTeamsUsernameProjectsPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type PostTeamsUsernameProjectsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostTeamsUsernameProjectsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostTeamsUsernameProjectsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostTeamsUsernameProjectsSecurity struct {
    Option1 *PostTeamsUsernameProjectsSecurityOption1 `security:"option"`
    Option2 *PostTeamsUsernameProjectsSecurityOption2 `security:"option"`
    Option3 *PostTeamsUsernameProjectsSecurityOption3 `security:"option"`
    
}

type PostTeamsUsernameProjectsRequest struct {
    PathParams PostTeamsUsernameProjectsPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostTeamsUsernameProjectsSecurity 
    
}

type PostTeamsUsernameProjectsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    Project map[string]interface{} 
    
}

