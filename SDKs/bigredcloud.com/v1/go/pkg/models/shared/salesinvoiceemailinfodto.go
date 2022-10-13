package shared

type SalesInvoiceEmailInfoDto struct {
	BccAddresses   []string `json:"bccAddresses"`
	MessageBody    *string  `json:"messageBody"`
	SalesInvoiceID *int64   `json:"salesInvoiceId"`
	ToAddress      *string  `json:"toAddress"`
}
