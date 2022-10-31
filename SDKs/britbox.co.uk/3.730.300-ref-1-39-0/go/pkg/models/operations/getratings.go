package operations

import (
"openapi/pkg/models/shared")

type GetRatingsQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetRatingsSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GetRatingsRequest struct {
    QueryParams GetRatingsQueryParams 
    Security GetRatingsSecurity 
    
}

type GetRatingsResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    GetRatings200ApplicationJSONObject map[string]int32 
    
}

