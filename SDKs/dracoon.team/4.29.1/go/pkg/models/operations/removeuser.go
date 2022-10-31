package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveUserPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type RemoveUserHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RemoveUserRequest struct {
	PathParams RemoveUserPathParams
	Headers    RemoveUserHeaders
}

type RemoveUserResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
