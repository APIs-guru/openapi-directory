package shared

// AssertionRule
// An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
type AssertionRule struct {
	AssertedControls []string   `json:"AssertedControls"`
	ControlPanelArn  string     `json:"ControlPanelArn"`
	Name             string     `json:"Name"`
	RuleConfig       RuleConfig `json:"RuleConfig"`
	SafetyRuleArn    string     `json:"SafetyRuleArn"`
	Status           StatusEnum `json:"Status"`
	WaitPeriodMs     int64      `json:"WaitPeriodMs"`
}
