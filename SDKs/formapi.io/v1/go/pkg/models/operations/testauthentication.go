package operations

import (
	"openapi/pkg/models/shared"
)

type TestAuthenticationSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type TestAuthenticationRequest struct {
	Security TestAuthenticationSecurity
}

type TestAuthenticationAuthenticationSuccessResponseStatusEnum string

const (
	TestAuthenticationAuthenticationSuccessResponseStatusEnumSuccess TestAuthenticationAuthenticationSuccessResponseStatusEnum = "success"
)

type TestAuthenticationAuthenticationSuccessResponse struct {
	Status TestAuthenticationAuthenticationSuccessResponseStatusEnum `json:"status"`
}

type TestAuthenticationResponse struct {
	ContentType                   string
	StatusCode                    int64
	AuthenticationError           *shared.AuthenticationError
	AuthenticationSuccessResponse *TestAuthenticationAuthenticationSuccessResponse
}
