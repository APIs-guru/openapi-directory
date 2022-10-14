package shared

type Rule struct {
	MetricName *string     `json:"MetricName,omitempty"`
	Name       *string     `json:"Name,omitempty"`
	Predicates []Predicate `json:"Predicates"`
	RuleID     string      `json:"RuleId"`
}
