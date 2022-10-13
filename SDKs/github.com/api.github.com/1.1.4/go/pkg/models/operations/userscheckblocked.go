package operations

import (
	"openapi/pkg/models/shared"
)

type UsersCheckBlockedPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersCheckBlockedRequest struct {
	PathParams UsersCheckBlockedPathParams
}

type UsersCheckBlockedResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
