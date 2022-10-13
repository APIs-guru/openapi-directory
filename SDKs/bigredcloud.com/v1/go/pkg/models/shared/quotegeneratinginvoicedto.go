package shared

type QuoteGeneratingInvoiceDto struct {
	QuoteID     *int64                     `json:"quoteId"`
	SaleInvoice *SalesInvoiceCreditNoteDto `json:"saleInvoice"`
}
