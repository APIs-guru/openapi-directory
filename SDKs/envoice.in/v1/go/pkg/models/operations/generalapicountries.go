package operations

import (
	"openapi/pkg/models/shared"
)

type GeneralAPICountriesHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type GeneralAPICountriesRequest struct {
	Headers GeneralAPICountriesHeaders
}

type GeneralAPICountriesResponse struct {
	Body                    []byte
	ContentType             string
	CountryDetailsAPIModels []shared.CountryDetailsAPIModel
	StatusCode              int64
}
