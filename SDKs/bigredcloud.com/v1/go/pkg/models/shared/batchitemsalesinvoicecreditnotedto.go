package shared

type BatchItemSalesInvoiceCreditNoteDto struct {
	Item   *SalesInvoiceCreditNoteDto `json:"item"`
	OpCode *int32                     `json:"opCode"`
}
