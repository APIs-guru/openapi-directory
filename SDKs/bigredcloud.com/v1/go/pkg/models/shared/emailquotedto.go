package shared

type EmailQuoteDto struct {
	BccAddresses []string `json:"bccAddresses"`
	MessageBody  *string  `json:"messageBody"`
	QuoteID      *int64   `json:"quoteId"`
	ToAddress    *string  `json:"toAddress"`
}
