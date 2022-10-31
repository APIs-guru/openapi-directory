package operations

import (
	"openapi/pkg/models/shared"
)

type AccountCreateJwtSecurity struct {
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountCreateJwtRequest struct {
	Security AccountCreateJwtSecurity
}

type AccountCreateJwtResponse struct {
	ContentType string
	StatusCode  int64
	Jwt         *shared.Jwt
}
