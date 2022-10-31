package operations

import (
"openapi/pkg/models/shared")

type UpdateRadiusConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UpdateRadiusConfigRequest struct {
    Headers UpdateRadiusConfigHeaders 
    Request shared.RadiusConfigUpdateRequest `request:"mediaType=application/json"`
    
}

type UpdateRadiusConfigResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    RadiusConfig *shared.RadiusConfig 
    StatusCode int64 
    
}

