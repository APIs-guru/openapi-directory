package shared

type ProductTranDto struct {
	AcEntries         []AcEntryDto `json:"acEntries"`
	Amount            *float64     `json:"amount"`
	AmountNet         float64      `json:"amountNet"`
	ID                *int64       `json:"id"`
	Percentage        *float64     `json:"percentage"`
	ProductCode       *string      `json:"productCode"`
	ProductID         *int64       `json:"productId"`
	Quantity          *float64     `json:"quantity"`
	TranNotes         []string     `json:"tranNotes"`
	UnitPrice         *float64     `json:"unitPrice"`
	Vat               *float64     `json:"vat"`
	VatAnalysisTypeID *int64       `json:"vatAnalysisTypeId"`
	VatRateID         *int64       `json:"vatRateId"`
}
