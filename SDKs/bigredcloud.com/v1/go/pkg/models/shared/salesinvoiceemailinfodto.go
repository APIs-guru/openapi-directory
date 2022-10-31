package shared



type SalesInvoiceEmailInfoDto struct {
    BccAddresses []string `json:"bccAddresses,omitempty"`
    MessageBody *string `json:"messageBody,omitempty"`
    SalesInvoiceID *int64 `json:"salesInvoiceId,omitempty"`
    ToAddress *string `json:"toAddress,omitempty"`
    
}

