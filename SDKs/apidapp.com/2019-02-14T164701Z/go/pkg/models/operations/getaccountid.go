package operations

import (
"openapi/pkg/models/shared")

type GetAccountIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAccountIDSecurity struct {
    Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAccountIDRequest struct {
    PathParams GetAccountIDPathParams 
    Security GetAccountIDSecurity 
    
}

type GetAccountIDResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

