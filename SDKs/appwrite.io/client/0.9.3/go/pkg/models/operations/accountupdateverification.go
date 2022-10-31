package operations

import (
	"openapi/pkg/models/shared"
)

type AccountUpdateVerificationRequestBody struct {
	Secret string `json:"secret"`
	UserID string `json:"userId"`
}

type AccountUpdateVerificationSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountUpdateVerificationRequest struct {
	Request  *AccountUpdateVerificationRequestBody `request:"mediaType=application/json"`
	Security AccountUpdateVerificationSecurity
}

type AccountUpdateVerificationResponse struct {
	ContentType string
	StatusCode  int64
	Token       *shared.Token
}
