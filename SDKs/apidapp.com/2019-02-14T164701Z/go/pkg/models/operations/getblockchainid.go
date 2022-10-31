package operations

import (
"openapi/pkg/models/shared")

type GetBlockchainIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetBlockchainIDSecurity struct {
    Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetBlockchainIDRequest struct {
    PathParams GetBlockchainIDPathParams 
    Security GetBlockchainIDSecurity 
    
}

type GetBlockchainIDResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

