package shared

type QuoteProductTransDto struct {
	AcEntries         []QuoteAcEntriesDto `json:"acEntries,omitempty"`
	Amount            *float64            `json:"amount,omitempty"`
	CompanyID         *int64              `json:"companyId,omitempty"`
	ID                *int64              `json:"id,omitempty"`
	Percentage        *float64            `json:"percentage,omitempty"`
	ProductCode       *string             `json:"productCode,omitempty"`
	ProductID         *int64              `json:"productId,omitempty"`
	Quantity          *float64            `json:"quantity,omitempty"`
	TranNotes         []string            `json:"tranNotes,omitempty"`
	UnitPrice         *float64            `json:"unitPrice,omitempty"`
	VatAmount         *float64            `json:"vatAmount,omitempty"`
	VatAnalysisTypeID *int64              `json:"vatAnalysisTypeId,omitempty"`
	VatRateID         *int64              `json:"vatRateId,omitempty"`
}
