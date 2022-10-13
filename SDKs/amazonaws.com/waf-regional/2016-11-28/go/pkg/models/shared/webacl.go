package shared

type WebACL struct {
	DefaultAction WafAction       `json:"DefaultAction"`
	MetricName    *string         `json:"MetricName"`
	Name          *string         `json:"Name"`
	Rules         []ActivatedRule `json:"Rules"`
	WebACLArn     *string         `json:"WebACLArn"`
	WebACLID      string          `json:"WebACLId"`
}
