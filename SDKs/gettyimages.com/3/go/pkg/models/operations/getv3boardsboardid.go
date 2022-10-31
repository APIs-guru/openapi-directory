package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3BoardsBoardIDPathParams struct {
	BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
}

type GetV3BoardsBoardIDRequest struct {
	PathParams GetV3BoardsBoardIDPathParams
}

type GetV3BoardsBoardIDResponse struct {
	BoardDetail *shared.BoardDetail
	ContentType string
	StatusCode  int64
}
