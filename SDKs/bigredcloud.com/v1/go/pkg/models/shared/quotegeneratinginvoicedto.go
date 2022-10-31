package shared



type QuoteGeneratingInvoiceDto struct {
    QuoteID *int64 `json:"quoteId,omitempty"`
    SaleInvoice *SalesInvoiceCreditNoteDto `json:"saleInvoice,omitempty"`
    
}

