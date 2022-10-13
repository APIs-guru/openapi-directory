package operations

type GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum string

const (
	GetAccounts200ApplicationJSONAccountsCurrencyCodeEnumEur GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum = "EUR"
	GetAccounts200ApplicationJSONAccountsCurrencyCodeEnumGbp GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum = "GBP"
)

type GetAccounts200ApplicationJSONAccountsCurrencyCurrency struct {
	Code        *GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum `json:"code"`
	Description *string                                                `json:"description"`
}

type GetAccounts200ApplicationJSONAccountsStatusEnum string

const (
	GetAccounts200ApplicationJSONAccountsStatusEnumLive     GetAccounts200ApplicationJSONAccountsStatusEnum = "LIVE"
	GetAccounts200ApplicationJSONAccountsStatusEnumMigrated GetAccounts200ApplicationJSONAccountsStatusEnum = "MIGRATED"
)

type GetAccounts200ApplicationJSONAccountsAccount struct {
	Balance             *int64                                                 `json:"balance"`
	Cbic                *string                                                `json:"cbic"`
	Ccan                *string                                                `json:"ccan"`
	Ciban               *string                                                `json:"ciban"`
	Cnsc                *string                                                `json:"cnsc"`
	Colour              *string                                                `json:"colour"`
	Currency            *GetAccounts200ApplicationJSONAccountsCurrencyCurrency `json:"currency"`
	DefaultAccount      *bool                                                  `json:"defaultAccount"`
	DirectDebitsAllowed *bool                                                  `json:"directDebitsAllowed"`
	Ican                *int64                                                 `json:"ican"`
	Name                *string                                                `json:"name"`
	Status              *GetAccounts200ApplicationJSONAccountsStatusEnum       `json:"status"`
}

type GetAccounts200ApplicationJSONAccounts struct {
	Accounts []GetAccounts200ApplicationJSONAccountsAccount `json:"accounts"`
}

type GetAccountsResponse struct {
	Accounts    *GetAccounts200ApplicationJSONAccounts
	ContentType string
	StatusCode  int64
}
