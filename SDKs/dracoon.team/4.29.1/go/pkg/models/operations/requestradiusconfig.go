package operations

import (
"openapi/pkg/models/shared")

type RequestRadiusConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestRadiusConfigRequest struct {
    Headers RequestRadiusConfigHeaders 
    
}

type RequestRadiusConfigResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    RadiusConfig *shared.RadiusConfig 
    StatusCode int64 
    
}

