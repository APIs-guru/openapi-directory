package operations

import (
"openapi/pkg/models/shared")

type RequestAdConfigPathParams struct {
    AdID int32 `pathParam:"style=simple,explode=false,name=ad_id"`
    
}

type RequestAdConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestAdConfigRequest struct {
    PathParams RequestAdConfigPathParams 
    Headers RequestAdConfigHeaders 
    
}

type RequestAdConfigResponse struct {
    ActiveDirectoryConfig *shared.ActiveDirectoryConfig 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

