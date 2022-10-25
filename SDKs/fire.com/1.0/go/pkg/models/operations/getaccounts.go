package operations

type GetAccountsAccountsAccountCurrencyCodeEnum string

const (
	GetAccountsAccountsAccountCurrencyCodeEnumEur GetAccountsAccountsAccountCurrencyCodeEnum = "EUR"
	GetAccountsAccountsAccountCurrencyCodeEnumGbp GetAccountsAccountsAccountCurrencyCodeEnum = "GBP"
)

type GetAccountsAccountsAccountCurrency struct {
	Code        *GetAccountsAccountsAccountCurrencyCodeEnum `json:"code,omitempty"`
	Description *string                                     `json:"description,omitempty"`
}

type GetAccountsAccountsAccountStatusEnum string

const (
	GetAccountsAccountsAccountStatusEnumLive     GetAccountsAccountsAccountStatusEnum = "LIVE"
	GetAccountsAccountsAccountStatusEnumMigrated GetAccountsAccountsAccountStatusEnum = "MIGRATED"
)

type GetAccountsAccountsAccount struct {
	Balance             *int64                                `json:"balance,omitempty"`
	Cbic                *string                               `json:"cbic,omitempty"`
	Ccan                *string                               `json:"ccan,omitempty"`
	Ciban               *string                               `json:"ciban,omitempty"`
	Cnsc                *string                               `json:"cnsc,omitempty"`
	Colour              *string                               `json:"colour,omitempty"`
	Currency            *GetAccountsAccountsAccountCurrency   `json:"currency,omitempty"`
	DefaultAccount      *bool                                 `json:"defaultAccount,omitempty"`
	DirectDebitsAllowed *bool                                 `json:"directDebitsAllowed,omitempty"`
	Ican                *int64                                `json:"ican,omitempty"`
	Name                *string                               `json:"name,omitempty"`
	Status              *GetAccountsAccountsAccountStatusEnum `json:"status,omitempty"`
}

type GetAccountsAccounts struct {
	Accounts []GetAccountsAccountsAccount `json:"accounts,omitempty"`
}

type GetAccountsResponse struct {
	Accounts    *GetAccountsAccounts
	ContentType string
	StatusCode  int64
}
