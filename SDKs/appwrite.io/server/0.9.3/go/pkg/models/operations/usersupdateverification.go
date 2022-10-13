package operations

import (
	"openapi/pkg/models/shared"
)

type UsersUpdateVerificationPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UsersUpdateVerificationRequestBody struct {
	EmailVerification bool `json:"emailVerification"`
}

type UsersUpdateVerificationSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type UsersUpdateVerificationRequest struct {
	PathParams UsersUpdateVerificationPathParams
	Request    *UsersUpdateVerificationRequestBody `request:"mediaType=application/json"`
	Security   UsersUpdateVerificationSecurity
}

type UsersUpdateVerificationResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
