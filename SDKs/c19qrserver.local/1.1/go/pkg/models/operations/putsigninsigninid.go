package operations

import (
	"openapi/pkg/models/shared"
)

type PutSigninSigninIDPathParams struct {
	SigninID int64 `pathParam:"style=simple,explode=false,name=signinId"`
}

type PutSigninSigninIDRequest struct {
	PathParams PutSigninSigninIDPathParams
	Request    *shared.Signin `request:"mediaType=application/json"`
}

type PutSigninSigninIDResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
	UserRecord   *shared.UserRecord
}
