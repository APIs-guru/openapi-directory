package operations

import (
"openapi/pkg/models/shared")

type GetWaybackV1AvailableQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Closest *shared.ClosestEnum `queryParam:"style=form,explode=true,name=closest"`
    StatusCode *int64 `queryParam:"style=form,explode=true,name=status_code"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    Timeout *float64 `queryParam:"style=form,explode=true,name=timeout"`
    Timestamp *string `queryParam:"style=form,explode=true,name=timestamp"`
    URL string `queryParam:"style=form,explode=true,name=url"`
    
}

type GetWaybackV1AvailableRequest struct {
    QueryParams GetWaybackV1AvailableQueryParams 
    
}

type GetWaybackV1AvailableResponse struct {
    AvailabilityResults *shared.AvailabilityResults 
    Body []byte 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

