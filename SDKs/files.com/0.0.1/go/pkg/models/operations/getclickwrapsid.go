package operations

import (
"openapi/pkg/models/shared")

type GetClickwrapsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetClickwrapsIDRequest struct {
    PathParams GetClickwrapsIDPathParams 
    
}

type GetClickwrapsIDResponse struct {
    ClickwrapEntity *shared.ClickwrapEntity 
    ContentType string 
    StatusCode int64 
    
}

