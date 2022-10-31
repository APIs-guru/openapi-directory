package shared



type EntityReceiptDisbursementTotalsPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []EntityReceiptDisbursementTotals `json:"results,omitempty"`
    
}

