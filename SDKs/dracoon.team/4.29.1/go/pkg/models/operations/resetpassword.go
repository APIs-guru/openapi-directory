package operations

import (
	"openapi/pkg/models/shared"
)

type ResetPasswordPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type ResetPasswordRequest struct {
	PathParams ResetPasswordPathParams
	Request    shared.ResetPasswordWithTokenRequest `request:"mediaType=application/json"`
}

type ResetPasswordResponse struct {
	ContentType                          string
	ErrorResponse                        *shared.ErrorResponse
	StatusCode                           int64
	ResetPassword400ApplicationJSONOneOf *interface{}
}
