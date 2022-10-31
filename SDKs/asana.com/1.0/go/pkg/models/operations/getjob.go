package operations

import (
"openapi/pkg/models/shared")

type GetJobPathParams struct {
    JobGid string `pathParam:"style=simple,explode=false,name=job_gid"`
    
}

type GetJobQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetJobRequest struct {
    PathParams GetJobPathParams 
    QueryParams GetJobQueryParams 
    
}

type GetJob200ApplicationJSON struct {
    Data *shared.JobResponse `json:"data,omitempty"`
    
}

type GetJobResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetJob200ApplicationJSONObject *GetJob200ApplicationJSON 
    
}

