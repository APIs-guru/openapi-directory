package operations

import (
"openapi/pkg/models/shared")

type ConfigConfigGetHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=authorization"`
    
}

type ConfigConfigGetRequest struct {
    Headers ConfigConfigGetHeaders 
    
}

type ConfigConfigGetResponse struct {
    Config *shared.Config 
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

