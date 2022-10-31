package shared



type CustomerDto struct {
    AccountName *string `json:"accountName,omitempty"`
    AccountNumber *string `json:"accountNumber,omitempty"`
    Address []string `json:"address,omitempty"`
    AuthCode *string `json:"authCode,omitempty"`
    Bank *EftBankDto `json:"bank,omitempty"`
    BusinessIdentifierCode *string `json:"businessIdentifierCode,omitempty"`
    Code *string `json:"code,omitempty"`
    Contact *string `json:"contact,omitempty"`
    Delivery []string `json:"delivery,omitempty"`
    EFtReference *string `json:"eFTReference,omitempty"`
    Email *string `json:"email,omitempty"`
    Fax *string `json:"fax,omitempty"`
    ID *int64 `json:"id,omitempty"`
    InternationalBankAccountNumber *string `json:"internationalBankAccountNumber,omitempty"`
    LedgerBalance *float64 `json:"ledgerBalance,omitempty"`
    Mobile *string `json:"mobile,omitempty"`
    Name *string `json:"name,omitempty"`
    OpeningBalance *OwnerOpeningBalanceInPeriodsDto `json:"openingBalance,omitempty"`
    OpeningBalances []OwnerOpeningBalanceDto `json:"openingBalances,omitempty"`
    OurCode *string `json:"ourCode,omitempty"`
    OwnerTypeID *int64 `json:"ownerTypeId,omitempty"`
    Phone *string `json:"phone,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    VatAnalysisTypeID *int64 `json:"vatAnalysisTypeId,omitempty"`
    VatReg *string `json:"vatReg,omitempty"`
    VatType *int64 `json:"vatType,omitempty"`
    
}

