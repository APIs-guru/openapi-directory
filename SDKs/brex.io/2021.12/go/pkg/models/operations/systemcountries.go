package operations

import (
	"openapi/pkg/models/shared"
)

type SystemCountriesSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type SystemCountriesRequest struct {
	Security SystemCountriesSecurity
}

type SystemCountriesResponse struct {
	ContentType                              string
	StatusCode                               int64
	SystemCountries200ApplicationJSONAnies   []interface{}
	SystemCountriesDefaultApplicationJSONAny *interface{}
}
