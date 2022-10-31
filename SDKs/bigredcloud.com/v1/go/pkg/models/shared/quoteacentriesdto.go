package shared



type QuoteAcEntriesDto struct {
    AccountCode *string `json:"accountCode,omitempty"`
    AnalysisCategoryID *int64 `json:"analysisCategoryId,omitempty"`
    CompanyID *int64 `json:"companyId,omitempty"`
    ID *int64 `json:"id,omitempty"`
    QuoteProductTranID *int64 `json:"quoteProductTranId,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

