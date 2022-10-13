package shared

type CreateRuleRequest struct {
	ChangeToken string `json:"ChangeToken"`
	MetricName  string `json:"MetricName"`
	Name        string `json:"Name"`
	Tags        []Tag  `json:"Tags"`
}
