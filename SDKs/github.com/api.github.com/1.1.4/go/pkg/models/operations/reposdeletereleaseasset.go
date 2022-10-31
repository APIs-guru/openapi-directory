package operations



type ReposDeleteReleaseAssetPathParams struct {
    AssetID int64 `pathParam:"style=simple,explode=false,name=asset_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDeleteReleaseAssetRequest struct {
    PathParams ReposDeleteReleaseAssetPathParams 
    
}

type ReposDeleteReleaseAssetResponse struct {
    ContentType string 
    StatusCode int64 
    
}

