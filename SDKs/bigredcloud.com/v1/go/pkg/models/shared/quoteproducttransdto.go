package shared

type QuoteProductTransDto struct {
	AcEntries         []QuoteAcEntriesDto `json:"acEntries"`
	Amount            *float64            `json:"amount"`
	CompanyID         *int64              `json:"companyId"`
	ID                *int64              `json:"id"`
	Percentage        *float64            `json:"percentage"`
	ProductCode       *string             `json:"productCode"`
	ProductID         *int64              `json:"productId"`
	Quantity          *float64            `json:"quantity"`
	TranNotes         []string            `json:"tranNotes"`
	UnitPrice         *float64            `json:"unitPrice"`
	VatAmount         *float64            `json:"vatAmount"`
	VatAnalysisTypeID *int64              `json:"vatAnalysisTypeId"`
	VatRateID         *int64              `json:"vatRateId"`
}
