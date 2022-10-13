package operations

import (
	"openapi/pkg/models/shared"
)

type GeneralAPICurrenciesHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type GeneralAPICurrenciesRequest struct {
	Headers GeneralAPICurrenciesHeaders
}

type GeneralAPICurrenciesResponse struct {
	Body                     []byte
	ContentType              string
	CurrencyDetailsAPIModels []shared.CurrencyDetailsAPIModel
	StatusCode               int64
}
