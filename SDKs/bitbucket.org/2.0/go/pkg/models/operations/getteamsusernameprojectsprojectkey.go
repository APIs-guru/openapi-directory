package operations

import (
"openapi/pkg/models/shared")

type GetTeamsUsernameProjectsProjectKeyPathParams struct {
    ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetTeamsUsernameProjectsProjectKeySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTeamsUsernameProjectsProjectKeySecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetTeamsUsernameProjectsProjectKeySecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsUsernameProjectsProjectKeySecurity struct {
    Option1 *GetTeamsUsernameProjectsProjectKeySecurityOption1 `security:"option"`
    Option2 *GetTeamsUsernameProjectsProjectKeySecurityOption2 `security:"option"`
    Option3 *GetTeamsUsernameProjectsProjectKeySecurityOption3 `security:"option"`
    
}

type GetTeamsUsernameProjectsProjectKeyRequest struct {
    PathParams GetTeamsUsernameProjectsProjectKeyPathParams 
    Security GetTeamsUsernameProjectsProjectKeySecurity 
    
}

type GetTeamsUsernameProjectsProjectKeyResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Project map[string]interface{} 
    
}

