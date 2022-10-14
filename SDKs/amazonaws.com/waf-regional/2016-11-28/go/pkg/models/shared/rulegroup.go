package shared

type RuleGroup struct {
	MetricName  *string `json:"MetricName,omitempty"`
	Name        *string `json:"Name,omitempty"`
	RuleGroupID string  `json:"RuleGroupId"`
}
