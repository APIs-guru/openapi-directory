package operations

import (
	"openapi/pkg/models/shared"
)

type LocaleGetCountriesSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type LocaleGetCountriesRequest struct {
	Security LocaleGetCountriesSecurity
}

type LocaleGetCountriesResponse struct {
	ContentType string
	StatusCode  int64
	CountryList *shared.CountryList
}
