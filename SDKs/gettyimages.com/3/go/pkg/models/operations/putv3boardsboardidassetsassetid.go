package operations



type PutV3BoardsBoardIDAssetsAssetIDPathParams struct {
    AssetID string `pathParam:"style=simple,explode=false,name=asset_id"`
    BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
    
}

type PutV3BoardsBoardIDAssetsAssetIDRequest struct {
    PathParams PutV3BoardsBoardIDAssetsAssetIDPathParams 
    
}

type PutV3BoardsBoardIDAssetsAssetIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

