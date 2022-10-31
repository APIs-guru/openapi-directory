package shared



type RateBasedRule struct {
    MatchPredicates []Predicate `json:"MatchPredicates"`
    MetricName *string `json:"MetricName,omitempty"`
    Name *string `json:"Name,omitempty"`
    RateKey RateKeyEnum `json:"RateKey"`
    RateLimit int64 `json:"RateLimit"`
    RuleID string `json:"RuleId"`
    
}

