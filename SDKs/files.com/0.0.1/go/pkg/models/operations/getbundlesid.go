package operations

import (
"openapi/pkg/models/shared")

type GetBundlesIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetBundlesIDRequest struct {
    PathParams GetBundlesIDPathParams 
    
}

type GetBundlesIDResponse struct {
    BundleEntity *shared.BundleEntity 
    ContentType string 
    StatusCode int64 
    
}

