package operations

import (
"openapi/pkg/models/shared")

type ReposGetReleaseAssetPathParams struct {
    AssetID int64 `pathParam:"style=simple,explode=false,name=asset_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetReleaseAssetRequest struct {
    PathParams ReposGetReleaseAssetPathParams 
    
}

type ReposGetReleaseAsset415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ReposGetReleaseAssetResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ReleaseAsset *shared.ReleaseAsset 
    ReposGetReleaseAsset415ApplicationJSONObject *ReposGetReleaseAsset415ApplicationJSON 
    
}

