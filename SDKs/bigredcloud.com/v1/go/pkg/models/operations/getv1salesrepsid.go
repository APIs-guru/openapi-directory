package operations

import (
"openapi/pkg/models/shared")

type GetV1SalesRepsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV1SalesRepsIDRequest struct {
    PathParams GetV1SalesRepsIDPathParams 
    
}

type GetV1SalesRepsIDResponse struct {
    ContentType string 
    SaleRepsDto *shared.SaleRepsDto 
    StatusCode int64 
    
}

