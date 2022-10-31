package operations

import (
"openapi/pkg/models/shared")

type PostSnippetsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostSnippetsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostSnippetsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostSnippetsSecurity struct {
    Option1 *PostSnippetsSecurityOption1 `security:"option"`
    Option2 *PostSnippetsSecurityOption2 `security:"option"`
    Option3 *PostSnippetsSecurityOption3 `security:"option"`
    
}

type PostSnippetsRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostSnippetsSecurity 
    
}

type PostSnippetsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    Snippet map[string]interface{} 
    
}

