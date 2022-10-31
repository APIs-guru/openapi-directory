package operations

import (
"time"
"openapi/pkg/models/shared")

type GetSpacesQueryParams struct {
    NumberOfResults *float64 `queryParam:"style=form,explode=true,name=numberOfResults"`
    Timestamp *time.Time `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type GetSpacesSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetSpacesRequest struct {
    QueryParams GetSpacesQueryParams 
    Security GetSpacesSecurity 
    
}

type GetSpacesResponse struct {
    Body []byte 
    ContentType string 
    GetSpacesResult *interface{} 
    StatusCode int64 
    
}

