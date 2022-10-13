package operations

import (
	"openapi/pkg/models/shared"
)

type PostLoginRequestBodySourceEnum string

const (
	PostLoginRequestBodySourceEnumIOs     PostLoginRequestBodySourceEnum = "iOS"
	PostLoginRequestBodySourceEnumAndroid PostLoginRequestBodySourceEnum = "android"
	PostLoginRequestBodySourceEnumWeb     PostLoginRequestBodySourceEnum = "web"
)

type PostLoginRequestBodySample struct {
	Email    *string                         `json:"email"`
	Password *string                         `json:"password"`
	Source   *PostLoginRequestBodySourceEnum `json:"source"`
}

type PostLoginRequest struct {
	Request PostLoginRequestBodySample `request:"mediaType=application/json"`
}

type PostLoginResponse struct {
	ContentType   string
	StatusCode    int64
	InvalidToken  *shared.InvalidToken
	LoginResponse *shared.LoginResponse
}
