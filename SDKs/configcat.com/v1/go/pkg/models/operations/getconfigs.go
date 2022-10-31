package operations

import (
"openapi/pkg/models/shared")

type GetConfigsPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type GetConfigsRequest struct {
    PathParams GetConfigsPathParams 
    
}

type GetConfigsResponse struct {
    ConfigModelHaljsons []shared.ConfigModelHaljson 
    ConfigModels []shared.ConfigModel 
    ContentType string 
    StatusCode int64 
    
}

