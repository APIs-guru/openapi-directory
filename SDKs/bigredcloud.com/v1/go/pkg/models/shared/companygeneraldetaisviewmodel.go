package shared

type CompanyGeneralDetaisViewModel struct {
	CompanyAddresses    []string `json:"companyAddresses"`
	CompanyName         *string  `json:"companyName"`
	CurrencyCode        *string  `json:"currencyCode"`
	CurrencyDescription *string  `json:"currencyDescription"`
	CurrencyID          *int64   `json:"currencyId"`
	CurrentcySymbol     *string  `json:"currentcySymbol"`
	Emails              []string `json:"emails"`
	Faxes               []string `json:"faxes"`
	Phones              []string `json:"phones"`
	RegionDescription   *string  `json:"regionDescription"`
	RegionID            *int64   `json:"regionId"`
	VatReg              *string  `json:"vatReg"`
}
