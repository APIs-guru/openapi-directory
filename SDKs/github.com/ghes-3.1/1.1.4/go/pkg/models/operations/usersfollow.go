package operations

import (
	"openapi/pkg/models/shared"
)

type UsersFollowPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersFollowRequest struct {
	PathParams UsersFollowPathParams
}

type UsersFollowResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
