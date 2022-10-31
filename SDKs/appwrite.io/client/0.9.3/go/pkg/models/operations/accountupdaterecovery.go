package operations

import (
	"openapi/pkg/models/shared"
)

type AccountUpdateRecoveryRequestBody struct {
	Password      string `json:"password"`
	PasswordAgain string `json:"passwordAgain"`
	Secret        string `json:"secret"`
	UserID        string `json:"userId"`
}

type AccountUpdateRecoverySecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountUpdateRecoveryRequest struct {
	Request  *AccountUpdateRecoveryRequestBody `request:"mediaType=application/json"`
	Security AccountUpdateRecoverySecurity
}

type AccountUpdateRecoveryResponse struct {
	ContentType string
	StatusCode  int64
	Token       *shared.Token
}
