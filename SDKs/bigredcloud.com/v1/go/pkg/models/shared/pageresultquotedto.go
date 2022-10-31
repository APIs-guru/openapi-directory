package shared

type PageResultQuoteDto struct {
	Count        *int64     `json:"Count,omitempty"`
	Items        []QuoteDto `json:"Items,omitempty"`
	NextPageLink *string    `json:"NextPageLink,omitempty"`
}
