package operations

import (
"openapi/pkg/models/shared")

type PostAccountSecurity struct {
    Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostAccountRequest struct {
    Security PostAccountSecurity 
    
}

type PostAccountResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

