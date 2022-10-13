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

type TestAuthentication200ApplicationJSONStatusEnum string

const (
	TestAuthentication200ApplicationJSONStatusEnumSuccess TestAuthentication200ApplicationJSONStatusEnum = "success"
)

type TestAuthentication200ApplicationJSONAuthenticationSuccessResponse struct {
	Status TestAuthentication200ApplicationJSONStatusEnum `json:"status"`
}

type TestAuthenticationResponse struct {
	ContentType                   string
	StatusCode                    int64
	AuthenticationError           *shared.AuthenticationError
	AuthenticationSuccessResponse *TestAuthentication200ApplicationJSONAuthenticationSuccessResponse
}
