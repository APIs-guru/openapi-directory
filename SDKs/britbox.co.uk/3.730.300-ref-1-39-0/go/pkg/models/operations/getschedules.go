package operations

import (
"time"
"openapi/pkg/models/shared")

type GetSchedulesQueryParams struct {
    Channels []string `queryParam:"style=form,explode=false,name=channels"`
    Date time.Time `queryParam:"style=form,explode=true,name=date"`
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Duration int32 `queryParam:"style=form,explode=true,name=duration"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Hour int32 `queryParam:"style=form,explode=true,name=hour"`
    Intersect *bool `queryParam:"style=form,explode=true,name=intersect"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    
}

type GetSchedulesRequest struct {
    QueryParams GetSchedulesQueryParams 
    
}

type GetSchedulesResponse struct {
    ContentType string 
    ItemScheduleLists []shared.ItemScheduleList 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

