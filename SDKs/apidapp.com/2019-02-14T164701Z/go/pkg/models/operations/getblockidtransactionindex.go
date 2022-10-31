package operations

import (
"openapi/pkg/models/shared")

type GetBlockIDTransactionIndexPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Index string `pathParam:"style=simple,explode=false,name=index"`
    
}

type GetBlockIDTransactionIndexSecurity struct {
    Key2 shared.SchemeKey2 `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetBlockIDTransactionIndexRequest struct {
    PathParams GetBlockIDTransactionIndexPathParams 
    Security GetBlockIDTransactionIndexSecurity 
    
}

type GetBlockIDTransactionIndexResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

