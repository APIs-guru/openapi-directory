package shared

type Filter struct {
	BetweenFilter *BetweenFilter `json:"betweenFilter,omitempty"`
	FieldName     *string        `json:"fieldName,omitempty"`
	InListFilter  *InListFilter  `json:"inListFilter,omitempty"`
	NumericFilter *NumericFilter `json:"numericFilter,omitempty"`
	StringFilter  *StringFilter  `json:"stringFilter,omitempty"`
}
