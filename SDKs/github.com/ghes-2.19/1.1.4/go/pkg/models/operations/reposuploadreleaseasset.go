package operations

import (
"openapi/pkg/models/shared")
var ReposUploadReleaseAssetServers = []string{
	"https://{origin}",
}

type ReposUploadReleaseAssetPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    ReleaseID int64 `pathParam:"style=simple,explode=false,name=release_id"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposUploadReleaseAssetQueryParams struct {
    Label *string `queryParam:"style=form,explode=true,name=label"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type ReposUploadReleaseAssetRequest struct {
    ServerURL *string 
    PathParams ReposUploadReleaseAssetPathParams 
    QueryParams ReposUploadReleaseAssetQueryParams 
    Request *string `request:"mediaType=*/*"`
    
}

type ReposUploadReleaseAssetResponse struct {
    ContentType string 
    StatusCode int64 
    ReleaseAsset *shared.ReleaseAsset 
    
}

