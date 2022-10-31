package operations

import (
"openapi/pkg/models/shared")

type RequestInfrastructurePropertiesInfoHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestInfrastructurePropertiesInfoRequest struct {
    Headers RequestInfrastructurePropertiesInfoHeaders 
    
}

type RequestInfrastructurePropertiesInfoResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    InfrastructureProperties *shared.InfrastructureProperties 
    StatusCode int64 
    
}

