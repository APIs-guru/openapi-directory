package shared

type CriterionAdditionalProperties struct {
	Eq           []string `json:"eq"`
	EqExactMatch []string `json:"eqExactMatch"`
	Gt           *int64   `json:"gt"`
	Gte          *int64   `json:"gte"`
	Lt           *int64   `json:"lt"`
	Lte          *int64   `json:"lte"`
	Neq          []string `json:"neq"`
}
