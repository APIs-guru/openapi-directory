package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserUserIDPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUserUserIDRequest struct {
	PathParams DeleteUserUserIDPathParams
}

type DeleteUserUserIDResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
}
