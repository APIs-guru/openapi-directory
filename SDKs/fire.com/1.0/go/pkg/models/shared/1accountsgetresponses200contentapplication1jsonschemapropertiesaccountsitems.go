package shared

type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum string

const (
	OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnumEur OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum = "EUR"
	OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnumGbp OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum = "GBP"
)

type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCurrency struct {
	Code        *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum `json:"code"`
	Description *string                                                                                         `json:"description"`
}

type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum string

const (
	OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnumLive     OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum = "LIVE"
	OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnumMigrated OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum = "MIGRATED"
)

type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems struct {
	Balance             *int64                                                                                          `json:"balance"`
	Cbic                *string                                                                                         `json:"cbic"`
	Ccan                *string                                                                                         `json:"ccan"`
	Ciban               *string                                                                                         `json:"ciban"`
	Cnsc                *string                                                                                         `json:"cnsc"`
	Colour              *string                                                                                         `json:"colour"`
	Currency            *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCurrency `json:"currency"`
	DefaultAccount      *bool                                                                                           `json:"defaultAccount"`
	DirectDebitsAllowed *bool                                                                                           `json:"directDebitsAllowed"`
	Ican                *int64                                                                                          `json:"ican"`
	Name                *string                                                                                         `json:"name"`
	Status              *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum       `json:"status"`
}
