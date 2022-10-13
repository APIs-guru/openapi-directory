package shared

type Rule struct {
	MetricName *string     `json:"MetricName"`
	Name       *string     `json:"Name"`
	Predicates []Predicate `json:"Predicates"`
	RuleID     string      `json:"RuleId"`
}
