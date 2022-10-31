package shared

type WebACL struct {
	DefaultAction WafAction       `json:"DefaultAction"`
	MetricName    *string         `json:"MetricName,omitempty"`
	Name          *string         `json:"Name,omitempty"`
	Rules         []ActivatedRule `json:"Rules"`
	WebACLArn     *string         `json:"WebACLArn,omitempty"`
	WebACLID      string          `json:"WebACLId"`
}
