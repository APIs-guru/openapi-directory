package shared



type CompanyGeneralDetaisViewModel struct {
    CompanyAddresses []string `json:"companyAddresses,omitempty"`
    CompanyName *string `json:"companyName,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    CurrencyDescription *string `json:"currencyDescription,omitempty"`
    CurrencyID *int64 `json:"currencyId,omitempty"`
    CurrentcySymbol *string `json:"currentcySymbol,omitempty"`
    Emails []string `json:"emails,omitempty"`
    Faxes []string `json:"faxes,omitempty"`
    Phones []string `json:"phones,omitempty"`
    RegionDescription *string `json:"regionDescription,omitempty"`
    RegionID *int64 `json:"regionId,omitempty"`
    VatReg *string `json:"vatReg,omitempty"`
    
}

