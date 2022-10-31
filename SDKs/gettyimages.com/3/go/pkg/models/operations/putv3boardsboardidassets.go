package operations

import (
"openapi/pkg/models/shared")

type PutV3BoardsBoardIDAssetsPathParams struct {
    BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
    
}

type PutV3BoardsBoardIDAssetsRequest struct {
    PathParams PutV3BoardsBoardIDAssetsPathParams 
    Request []shared.BoardAsset `request:"mediaType=application/json"`
    
}

type PutV3BoardsBoardIDAssetsResponse struct {
    AddBoardAssetsResult *shared.AddBoardAssetsResult 
    ContentType string 
    StatusCode int64 
    
}

