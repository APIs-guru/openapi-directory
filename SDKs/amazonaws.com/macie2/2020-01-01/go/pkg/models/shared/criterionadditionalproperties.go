package shared

type CriterionAdditionalProperties struct {
	Eq           []string `json:"eq,omitempty"`
	EqExactMatch []string `json:"eqExactMatch,omitempty"`
	Gt           *int64   `json:"gt,omitempty"`
	Gte          *int64   `json:"gte,omitempty"`
	Lt           *int64   `json:"lt,omitempty"`
	Lte          *int64   `json:"lte,omitempty"`
	Neq          []string `json:"neq,omitempty"`
}
