package operations

import (
"openapi/pkg/models/shared")

type FileDownloadPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type FileDownloadQueryParams struct {
    Action *string `queryParam:"style=form,explode=true,name=action"`
    PreviewSize *string `queryParam:"style=form,explode=true,name=preview_size"`
    WithPreviews *bool `queryParam:"style=form,explode=true,name=with_previews"`
    WithPriorityColor *bool `queryParam:"style=form,explode=true,name=with_priority_color"`
    
}

type FileDownloadRequest struct {
    PathParams FileDownloadPathParams 
    QueryParams FileDownloadQueryParams 
    
}

type FileDownloadResponse struct {
    ContentType string 
    FileEntity *shared.FileEntity 
    StatusCode int64 
    
}

