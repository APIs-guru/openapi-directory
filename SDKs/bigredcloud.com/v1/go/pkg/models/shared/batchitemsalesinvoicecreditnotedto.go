package shared



type BatchItemSalesInvoiceCreditNoteDto struct {
    Item *SalesInvoiceCreditNoteDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

