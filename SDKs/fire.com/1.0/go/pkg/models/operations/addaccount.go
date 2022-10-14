package operations

import (
	"openapi/pkg/models/shared"
)

type AddAccountRequestBodyCurrencyEnum string

const (
	AddAccountRequestBodyCurrencyEnumEur AddAccountRequestBodyCurrencyEnum = "EUR"
	AddAccountRequestBodyCurrencyEnumGbp AddAccountRequestBodyCurrencyEnum = "GBP"
)

type AddAccountRequestBodyNewAccount struct {
	AcceptFeesAndCharges *bool                              `json:"acceptFeesAndCharges,omitempty"`
	AccountName          *string                            `json:"accountName,omitempty"`
	Currency             *AddAccountRequestBodyCurrencyEnum `json:"currency,omitempty"`
}

type AddAccountRequest struct {
	Request AddAccountRequestBodyNewAccount `request:"mediaType=application/json"`
}

type AddAccountResponse struct {
	ContentType                                                                    string
	StatusCode                                                                     int64
	OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems
}
