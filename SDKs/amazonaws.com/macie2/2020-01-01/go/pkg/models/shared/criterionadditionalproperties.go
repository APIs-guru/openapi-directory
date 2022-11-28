package shared

// CriterionAdditionalProperties
// Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.
type CriterionAdditionalProperties struct {
	Eq           []string `json:"eq,omitempty"`
	EqExactMatch []string `json:"eqExactMatch,omitempty"`
	Gt           *int64   `json:"gt,omitempty"`
	Gte          *int64   `json:"gte,omitempty"`
	Lt           *int64   `json:"lt,omitempty"`
	Lte          *int64   `json:"lte,omitempty"`
	Neq          []string `json:"neq,omitempty"`
}
