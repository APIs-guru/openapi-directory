package operations

import (
	"openapi/pkg/models/shared"
)

type AccountGetPrefsSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountGetPrefsRequest struct {
	Security AccountGetPrefsSecurity
}

type AccountGetPrefsResponse struct {
	ContentType string
	StatusCode  int64
	Preferences map[string]interface{}
}
