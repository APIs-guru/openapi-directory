package shared




type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum string

const (
    OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnumEur OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum = "EUR"
OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnumGbp OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum = "GBP"
)


type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency struct {
    Code *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum `json:"code,omitempty"`
    Description *string `json:"description,omitempty"`
    
}


type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum string

const (
    OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnumLive OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum = "LIVE"
OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnumMigrated OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum = "MIGRATED"
)


type OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems struct {
    Balance *int64 `json:"balance,omitempty"`
    Cbic *string `json:"cbic,omitempty"`
    Ccan *string `json:"ccan,omitempty"`
    Ciban *string `json:"ciban,omitempty"`
    Cnsc *string `json:"cnsc,omitempty"`
    Colour *string `json:"colour,omitempty"`
    Currency *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency `json:"currency,omitempty"`
    DefaultAccount *bool `json:"defaultAccount,omitempty"`
    DirectDebitsAllowed *bool `json:"directDebitsAllowed,omitempty"`
    Ican *int64 `json:"ican,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum `json:"status,omitempty"`
    
}

