package shared

type CreateRuleGroupRequest struct {
	ChangeToken string `json:"ChangeToken"`
	MetricName  string `json:"MetricName"`
	Name        string `json:"Name"`
	Tags        []Tag  `json:"Tags,omitempty"`
}
