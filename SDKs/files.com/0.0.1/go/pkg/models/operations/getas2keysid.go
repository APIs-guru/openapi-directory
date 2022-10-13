package operations

import (
	"openapi/pkg/models/shared"
)

type GetAs2KeysIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAs2KeysIDRequest struct {
	PathParams GetAs2KeysIDPathParams
}

type GetAs2KeysIDResponse struct {
	As2KeyEntity *shared.As2KeyEntity
	ContentType  string
	StatusCode   int64
}
