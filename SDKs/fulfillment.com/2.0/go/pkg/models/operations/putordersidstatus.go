package operations

import (
"openapi/pkg/models/shared")

type PutOrdersIDStatusPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutOrdersIDStatusStatusTypeSimpleV2Status struct {
    Code string `json:"code"`
    
}

type PutOrdersIDStatusStatusTypeSimpleV2 struct {
    Reason string `json:"reason"`
    Status PutOrdersIDStatusStatusTypeSimpleV2Status `json:"status"`
    
}

type PutOrdersIDStatusSecurity struct {
    FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
    
}

type PutOrdersIDStatusRequest struct {
    PathParams PutOrdersIDStatusPathParams 
    Request PutOrdersIDStatusStatusTypeSimpleV2 `request:"mediaType=application/json"`
    Security PutOrdersIDStatusSecurity 
    
}

type PutOrdersIDStatusResponse struct {
    ContentType string 
    StatusCode int64 
    OneordersPostResponses201ContentApplication1jsonSchema *shared.OneordersPostResponses201ContentApplication1jsonSchema 
    
}

