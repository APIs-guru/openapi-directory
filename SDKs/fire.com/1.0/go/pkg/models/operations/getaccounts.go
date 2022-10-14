package operations

type GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum string

const (
	GetAccounts200ApplicationJSONAccountsCurrencyCodeEnumEur GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum = "EUR"
	GetAccounts200ApplicationJSONAccountsCurrencyCodeEnumGbp GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum = "GBP"
)

type GetAccounts200ApplicationJSONAccountsCurrencyCurrency struct {
	Code        *GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum `json:"code,omitempty"`
	Description *string                                                `json:"description,omitempty"`
}

type GetAccounts200ApplicationJSONAccountsStatusEnum string

const (
	GetAccounts200ApplicationJSONAccountsStatusEnumLive     GetAccounts200ApplicationJSONAccountsStatusEnum = "LIVE"
	GetAccounts200ApplicationJSONAccountsStatusEnumMigrated GetAccounts200ApplicationJSONAccountsStatusEnum = "MIGRATED"
)

type GetAccounts200ApplicationJSONAccountsAccount struct {
	Balance             *int64                                                 `json:"balance,omitempty"`
	Cbic                *string                                                `json:"cbic,omitempty"`
	Ccan                *string                                                `json:"ccan,omitempty"`
	Ciban               *string                                                `json:"ciban,omitempty"`
	Cnsc                *string                                                `json:"cnsc,omitempty"`
	Colour              *string                                                `json:"colour,omitempty"`
	Currency            *GetAccounts200ApplicationJSONAccountsCurrencyCurrency `json:"currency,omitempty"`
	DefaultAccount      *bool                                                  `json:"defaultAccount,omitempty"`
	DirectDebitsAllowed *bool                                                  `json:"directDebitsAllowed,omitempty"`
	Ican                *int64                                                 `json:"ican,omitempty"`
	Name                *string                                                `json:"name,omitempty"`
	Status              *GetAccounts200ApplicationJSONAccountsStatusEnum       `json:"status,omitempty"`
}

type GetAccounts200ApplicationJSONAccounts struct {
	Accounts []GetAccounts200ApplicationJSONAccountsAccount `json:"accounts,omitempty"`
}

type GetAccountsResponse struct {
	Accounts    *GetAccounts200ApplicationJSONAccounts
	ContentType string
	StatusCode  int64
}
