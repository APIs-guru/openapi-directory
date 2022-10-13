package operations

type DeleteV3BoardsBoardIDAssetsAssetIDPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=asset_id"`
	BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
}

type DeleteV3BoardsBoardIDAssetsAssetIDRequest struct {
	PathParams DeleteV3BoardsBoardIDAssetsAssetIDPathParams
}

type DeleteV3BoardsBoardIDAssetsAssetIDResponse struct {
	ContentType string
	StatusCode  int64
}
