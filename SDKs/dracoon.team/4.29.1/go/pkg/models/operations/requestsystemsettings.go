package operations

import (
"openapi/pkg/models/shared")

type RequestSystemSettingsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestSystemSettingsRequest struct {
    Headers RequestSystemSettingsHeaders 
    
}

type RequestSystemSettingsResponse struct {
    ConfigOptionList *shared.ConfigOptionList 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

