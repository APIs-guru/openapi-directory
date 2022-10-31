package operations

import (
"openapi/pkg/models/shared")

type GetAttachmentsForTaskPathParams struct {
    TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
    
}

type GetAttachmentsForTaskQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetAttachmentsForTaskRequest struct {
    PathParams GetAttachmentsForTaskPathParams 
    QueryParams GetAttachmentsForTaskQueryParams 
    
}

type GetAttachmentsForTask200ApplicationJSON struct {
    Data []shared.AttachmentCompact `json:"data,omitempty"`
    
}

type GetAttachmentsForTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetAttachmentsForTask200ApplicationJSONObject *GetAttachmentsForTask200ApplicationJSON 
    
}

