package operations

import (
"openapi/pkg/models/shared")

type FileActionMetadataPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type FileActionMetadataQueryParams struct {
    PreviewSize *string `queryParam:"style=form,explode=true,name=preview_size"`
    WithPreviews *bool `queryParam:"style=form,explode=true,name=with_previews"`
    WithPriorityColor *bool `queryParam:"style=form,explode=true,name=with_priority_color"`
    
}

type FileActionMetadataRequest struct {
    PathParams FileActionMetadataPathParams 
    QueryParams FileActionMetadataQueryParams 
    
}

type FileActionMetadataResponse struct {
    ContentType string 
    FileEntity *shared.FileEntity 
    StatusCode int64 
    
}

