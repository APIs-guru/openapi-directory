package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsCheckBlockedUserPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsCheckBlockedUserRequest struct {
	PathParams OrgsCheckBlockedUserPathParams
}

type OrgsCheckBlockedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
