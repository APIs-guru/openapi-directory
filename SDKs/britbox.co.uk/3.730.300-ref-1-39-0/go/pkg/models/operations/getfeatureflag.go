package operations

import (
"openapi/pkg/models/shared")

type GetFeatureFlagPathParams struct {
    Feature string `pathParam:"style=simple,explode=false,name=feature"`
    
}

type GetFeatureFlagQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetFeatureFlagRequest struct {
    PathParams GetFeatureFlagPathParams 
    QueryParams GetFeatureFlagQueryParams 
    
}

type GetFeatureFlagResponse struct {
    ContentType string 
    ItvFeatureFlag *shared.ItvFeatureFlag 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

