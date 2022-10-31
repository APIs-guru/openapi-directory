package operations

import (
"openapi/pkg/models/shared")

type RemoveAdConfigPathParams struct {
    AdID int32 `pathParam:"style=simple,explode=false,name=ad_id"`
    
}

type RemoveAdConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveAdConfigRequest struct {
    PathParams RemoveAdConfigPathParams 
    Headers RemoveAdConfigHeaders 
    
}

type RemoveAdConfigResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

