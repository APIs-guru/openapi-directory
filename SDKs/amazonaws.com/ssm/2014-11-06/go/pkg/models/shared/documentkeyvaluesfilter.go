package shared

type DocumentKeyValuesFilter struct {
	Key    *string  `json:"Key"`
	Values []string `json:"Values"`
}
