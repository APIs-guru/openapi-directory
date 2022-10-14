package shared

type CreateRateBasedRuleRequest struct {
	ChangeToken string      `json:"ChangeToken"`
	MetricName  string      `json:"MetricName"`
	Name        string      `json:"Name"`
	RateKey     RateKeyEnum `json:"RateKey"`
	RateLimit   int64       `json:"RateLimit"`
	Tags        []Tag       `json:"Tags,omitempty"`
}
