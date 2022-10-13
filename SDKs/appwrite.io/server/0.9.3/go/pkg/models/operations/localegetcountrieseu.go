package operations

import (
	"openapi/pkg/models/shared"
)

type LocaleGetCountriesEuSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type LocaleGetCountriesEuRequest struct {
	Security LocaleGetCountriesEuSecurity
}

type LocaleGetCountriesEuResponse struct {
	ContentType string
	StatusCode  int64
	CountryList *shared.CountryList
}
