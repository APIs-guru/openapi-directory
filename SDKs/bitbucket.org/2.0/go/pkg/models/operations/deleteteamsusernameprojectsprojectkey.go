package operations

import (
"openapi/pkg/models/shared")

type DeleteTeamsUsernameProjectsProjectKeyPathParams struct {
    ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type DeleteTeamsUsernameProjectsProjectKeySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteTeamsUsernameProjectsProjectKeySecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteTeamsUsernameProjectsProjectKeySecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteTeamsUsernameProjectsProjectKeySecurity struct {
    Option1 *DeleteTeamsUsernameProjectsProjectKeySecurityOption1 `security:"option"`
    Option2 *DeleteTeamsUsernameProjectsProjectKeySecurityOption2 `security:"option"`
    Option3 *DeleteTeamsUsernameProjectsProjectKeySecurityOption3 `security:"option"`
    
}

type DeleteTeamsUsernameProjectsProjectKeyRequest struct {
    PathParams DeleteTeamsUsernameProjectsProjectKeyPathParams 
    Security DeleteTeamsUsernameProjectsProjectKeySecurity 
    
}

type DeleteTeamsUsernameProjectsProjectKeyResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

