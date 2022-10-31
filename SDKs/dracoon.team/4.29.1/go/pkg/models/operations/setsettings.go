package operations

import (
"openapi/pkg/models/shared")

type SetSettingsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type SetSettingsRequest struct {
    Headers SetSettingsHeaders 
    Request shared.CustomerSettingsRequest `request:"mediaType=application/json"`
    
}

type SetSettingsResponse struct {
    ContentType string 
    CustomerSettingsResponse *shared.CustomerSettingsResponse 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

