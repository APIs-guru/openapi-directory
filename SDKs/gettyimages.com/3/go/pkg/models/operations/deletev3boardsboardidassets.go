package operations



type DeleteV3BoardsBoardIDAssetsPathParams struct {
    BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
    
}

type DeleteV3BoardsBoardIDAssetsQueryParams struct {
    AssetIds []string `queryParam:"style=form,explode=true,name=asset_ids"`
    
}

type DeleteV3BoardsBoardIDAssetsRequest struct {
    PathParams DeleteV3BoardsBoardIDAssetsPathParams 
    QueryParams DeleteV3BoardsBoardIDAssetsQueryParams 
    
}

type DeleteV3BoardsBoardIDAssetsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

