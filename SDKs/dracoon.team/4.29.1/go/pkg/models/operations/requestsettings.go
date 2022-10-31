package operations

import (
"openapi/pkg/models/shared")

type RequestSettingsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestSettingsRequest struct {
    Headers RequestSettingsHeaders 
    
}

type RequestSettingsResponse struct {
    ContentType string 
    CustomerSettingsResponse *shared.CustomerSettingsResponse 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

