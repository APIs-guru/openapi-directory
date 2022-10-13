package shared

type RateBasedRule struct {
	MatchPredicates []Predicate `json:"MatchPredicates"`
	MetricName      *string     `json:"MetricName"`
	Name            *string     `json:"Name"`
	RateKey         RateKeyEnum `json:"RateKey"`
	RateLimit       int64       `json:"RateLimit"`
	RuleID          string      `json:"RuleId"`
}
