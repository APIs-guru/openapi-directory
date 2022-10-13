package shared

type KendraConfiguration struct {
	KendraIndex              string  `json:"kendraIndex"`
	QueryFilterString        *string `json:"queryFilterString"`
	QueryFilterStringEnabled *bool   `json:"queryFilterStringEnabled"`
}
