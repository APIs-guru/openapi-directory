package shared

type BatchItemQuoteDto struct {
	Item   *QuoteDto `json:"item,omitempty"`
	OpCode *int32    `json:"opCode,omitempty"`
}
