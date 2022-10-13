package shared

type QuoteAcEntriesDto struct {
	AccountCode        *string  `json:"accountCode"`
	AnalysisCategoryID *int64   `json:"analysisCategoryId"`
	CompanyID          *int64   `json:"companyId"`
	ID                 *int64   `json:"id"`
	QuoteProductTranID *int64   `json:"quoteProductTranId"`
	Value              *float64 `json:"value"`
}
