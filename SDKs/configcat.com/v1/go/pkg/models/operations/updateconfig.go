package operations

import (
"openapi/pkg/models/shared")

type UpdateConfigPathParams struct {
    ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
    
}

type UpdateConfigRequests struct {
    UpdateConfigRequest *shared.UpdateConfigRequest `request:"mediaType=application/*+json"`
    UpdateConfigRequest1 *shared.UpdateConfigRequest `request:"mediaType=application/json"`
    UpdateConfigRequest2 *shared.UpdateConfigRequest `request:"mediaType=text/json"`
    
}

type UpdateConfigRequest struct {
    PathParams UpdateConfigPathParams 
    Request UpdateConfigRequests 
    
}

type UpdateConfigResponse struct {
    ConfigModel *shared.ConfigModel 
    ConfigModelHaljson *shared.ConfigModelHaljson 
    ContentType string 
    StatusCode int64 
    
}

