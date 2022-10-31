package operations

import (
"openapi/pkg/models/shared")

type RequestGeneralSettingsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestGeneralSettingsRequest struct {
    Headers RequestGeneralSettingsHeaders 
    
}

type RequestGeneralSettingsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    GeneralSettings *shared.GeneralSettings 
    StatusCode int64 
    
}

