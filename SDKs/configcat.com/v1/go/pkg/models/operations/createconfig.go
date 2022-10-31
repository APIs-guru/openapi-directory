package operations

import (
"openapi/pkg/models/shared")

type CreateConfigPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type CreateConfigRequests struct {
    CreateConfigRequest *shared.CreateConfigRequest `request:"mediaType=application/*+json"`
    CreateConfigRequest1 *shared.CreateConfigRequest `request:"mediaType=application/json"`
    CreateConfigRequest2 *shared.CreateConfigRequest `request:"mediaType=text/json"`
    
}

type CreateConfigRequest struct {
    PathParams CreateConfigPathParams 
    Request CreateConfigRequests 
    
}

type CreateConfigResponse struct {
    ConfigModel *shared.ConfigModel 
    ConfigModelHaljson *shared.ConfigModelHaljson 
    ContentType string 
    StatusCode int64 
    
}

