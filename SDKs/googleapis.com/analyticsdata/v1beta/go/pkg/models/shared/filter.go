package shared

type Filter struct {
	BetweenFilter *BetweenFilter `json:"betweenFilter"`
	FieldName     *string        `json:"fieldName"`
	InListFilter  *InListFilter  `json:"inListFilter"`
	NumericFilter *NumericFilter `json:"numericFilter"`
	StringFilter  *StringFilter  `json:"stringFilter"`
}
