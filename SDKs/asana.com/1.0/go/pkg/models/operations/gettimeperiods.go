package operations

import (
"time"
"openapi/pkg/models/shared")

type GetTimePeriodsQueryParams struct {
    EndOn *time.Time `queryParam:"style=form,explode=true,name=end_on"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    StartOn *time.Time `queryParam:"style=form,explode=true,name=start_on"`
    Workspace string `queryParam:"style=form,explode=true,name=workspace"`
    
}

type GetTimePeriodsRequest struct {
    QueryParams GetTimePeriodsQueryParams 
    
}

type GetTimePeriods200ApplicationJSON struct {
    Data []shared.TimePeriodCompact `json:"data,omitempty"`
    
}

type GetTimePeriodsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetTimePeriods200ApplicationJSONObject *GetTimePeriods200ApplicationJSON 
    
}

