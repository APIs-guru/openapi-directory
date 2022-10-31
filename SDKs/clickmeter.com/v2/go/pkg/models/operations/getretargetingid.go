package operations

import (
	"openapi/pkg/models/shared"
)

type GetRetargetingIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetRetargetingIDRequest struct {
	PathParams GetRetargetingIDPathParams
}

type GetRetargetingIDResponse struct {
	APICoreDtoRetargetingRetargetingScript *shared.APICoreDtoRetargetingRetargetingScript
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
}
