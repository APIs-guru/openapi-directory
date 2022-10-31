package operations

import (
"openapi/pkg/models/shared")

type CreateAttachmentForTaskPathParams struct {
    TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
    
}

type CreateAttachmentForTaskQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type CreateAttachmentForTaskRequest struct {
    PathParams CreateAttachmentForTaskPathParams 
    QueryParams CreateAttachmentForTaskQueryParams 
    Request shared.AttachmentRequest `request:"mediaType=multipart/form-data"`
    
}

type CreateAttachmentForTask200ApplicationJSON struct {
    Data *shared.AttachmentResponse `json:"data,omitempty"`
    
}

type CreateAttachmentForTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    CreateAttachmentForTask200ApplicationJSONObject *CreateAttachmentForTask200ApplicationJSON 
    
}

