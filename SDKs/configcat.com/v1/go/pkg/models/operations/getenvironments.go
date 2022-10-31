package operations

import (
"openapi/pkg/models/shared")

type GetEnvironmentsPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type GetEnvironmentsRequest struct {
    PathParams GetEnvironmentsPathParams 
    
}

type GetEnvironmentsResponse struct {
    ContentType string 
    EnvironmentModelHaljsons []shared.EnvironmentModelHaljson 
    EnvironmentModels []shared.EnvironmentModel 
    StatusCode int64 
    
}

