package operations

import (
	"openapi/pkg/models/shared"
)

type LocaleGetSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type LocaleGetRequest struct {
	Security LocaleGetSecurity
}

type LocaleGetResponse struct {
	ContentType string
	StatusCode  int64
	Locale      *shared.Locale
}
