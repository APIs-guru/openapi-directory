package operations

import (
	"openapi/pkg/models/shared"
)

type AccountDeleteSessionPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type AccountDeleteSessionSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountDeleteSessionRequest struct {
	PathParams AccountDeleteSessionPathParams
	Security   AccountDeleteSessionSecurity
}

type AccountDeleteSessionResponse struct {
	ContentType string
	StatusCode  int64
}
