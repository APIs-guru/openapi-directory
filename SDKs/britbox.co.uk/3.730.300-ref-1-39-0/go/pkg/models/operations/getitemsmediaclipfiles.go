package operations

import (
"openapi/pkg/models/shared")

type GetItemsMediaClipFilesQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetItemsMediaClipFilesRequest struct {
    QueryParams GetItemsMediaClipFilesQueryParams 
    Request shared.ItemDownloadableRequest `request:"mediaType=application/json"`
    
}

type GetItemsMediaClipFilesResponse struct {
    ContentType string 
    ItemClipFilesList *shared.ItemClipFilesList 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

