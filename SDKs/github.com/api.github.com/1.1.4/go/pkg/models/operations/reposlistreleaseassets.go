package operations

import (
"openapi/pkg/models/shared")

type ReposListReleaseAssetsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    ReleaseID int64 `pathParam:"style=simple,explode=false,name=release_id"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListReleaseAssetsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposListReleaseAssetsRequest struct {
    PathParams ReposListReleaseAssetsPathParams 
    QueryParams ReposListReleaseAssetsQueryParams 
    
}

type ReposListReleaseAssetsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ReleaseAssets []shared.ReleaseAsset 
    
}

