package shared

type EntityReceiptDisbursementTotalsPage struct {
	Pagination *OffsetInfo                       `json:"pagination"`
	Results    []EntityReceiptDisbursementTotals `json:"results"`
}
