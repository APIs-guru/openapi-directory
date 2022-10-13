package shared

type PageResultQuoteDto struct {
	Count        *int64     `json:"Count"`
	Items        []QuoteDto `json:"Items"`
	NextPageLink *string    `json:"NextPageLink"`
}
