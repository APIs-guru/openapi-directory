package operations

import (
"openapi/pkg/models/shared")

type FolderListForPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type FolderListForPathQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    PreviewSize *string `queryParam:"style=form,explode=true,name=preview_size"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    SearchAll *bool `queryParam:"style=form,explode=true,name=search_all"`
    WithPreviews *bool `queryParam:"style=form,explode=true,name=with_previews"`
    WithPriorityColor *bool `queryParam:"style=form,explode=true,name=with_priority_color"`
    
}

type FolderListForPathRequest struct {
    PathParams FolderListForPathPathParams 
    QueryParams FolderListForPathQueryParams 
    
}

type FolderListForPathResponse struct {
    ContentType string 
    FileEntities []shared.FileEntity 
    StatusCode int64 
    
}

