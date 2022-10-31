package operations

import (
"openapi/pkg/models/shared")

type PutV3BoardsBoardIDPathParams struct {
    BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
    
}

type PutV3BoardsBoardIDRequest struct {
    PathParams PutV3BoardsBoardIDPathParams 
    Request *shared.BoardInfo `request:"mediaType=application/json"`
    
}

type PutV3BoardsBoardIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

