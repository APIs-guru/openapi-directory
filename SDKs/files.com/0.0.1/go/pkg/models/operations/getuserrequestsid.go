package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserRequestsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUserRequestsIDRequest struct {
	PathParams GetUserRequestsIDPathParams
}

type GetUserRequestsIDResponse struct {
	ContentType       string
	StatusCode        int64
	UserRequestEntity *shared.UserRequestEntity
}
