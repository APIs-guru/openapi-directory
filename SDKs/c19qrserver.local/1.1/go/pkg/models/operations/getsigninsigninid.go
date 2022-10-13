package operations

import (
	"openapi/pkg/models/shared"
)

type GetSigninSigninIDPathParams struct {
	SigninID int64 `pathParam:"style=simple,explode=false,name=signinId"`
}

type GetSigninSigninIDRequest struct {
	PathParams GetSigninSigninIDPathParams
}

type GetSigninSigninIDResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
	Signin       *shared.Signin
}
