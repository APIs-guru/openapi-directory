package operations

import (
	"openapi/pkg/models/shared"
)

type AddAccountNewAccountCurrencyEnum string

const (
	AddAccountNewAccountCurrencyEnumEur AddAccountNewAccountCurrencyEnum = "EUR"
	AddAccountNewAccountCurrencyEnumGbp AddAccountNewAccountCurrencyEnum = "GBP"
)

type AddAccountNewAccount struct {
	AcceptFeesAndCharges *bool                             `json:"acceptFeesAndCharges,omitempty"`
	AccountName          *string                           `json:"accountName,omitempty"`
	Currency             *AddAccountNewAccountCurrencyEnum `json:"currency,omitempty"`
}

type AddAccountRequest struct {
	Request AddAccountNewAccount `request:"mediaType=application/json"`
}

type AddAccountResponse struct {
	ContentType                                                                    string
	StatusCode                                                                     int64
	OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems
}
