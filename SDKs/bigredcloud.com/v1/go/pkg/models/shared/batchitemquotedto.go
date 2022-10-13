package shared

type BatchItemQuoteDto struct {
	Item   *QuoteDto `json:"item"`
	OpCode *int32    `json:"opCode"`
}
