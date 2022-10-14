package shared

type EmailQuoteDto struct {
	BccAddresses []string `json:"bccAddresses,omitempty"`
	MessageBody  *string  `json:"messageBody,omitempty"`
	QuoteID      *int64   `json:"quoteId,omitempty"`
	ToAddress    *string  `json:"toAddress,omitempty"`
}
