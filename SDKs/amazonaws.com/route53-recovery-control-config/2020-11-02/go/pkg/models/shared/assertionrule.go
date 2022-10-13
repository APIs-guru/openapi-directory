package shared

type AssertionRule struct {
	AssertedControls []string   `json:"AssertedControls"`
	ControlPanelArn  string     `json:"ControlPanelArn"`
	Name             string     `json:"Name"`
	RuleConfig       RuleConfig `json:"RuleConfig"`
	SafetyRuleArn    string     `json:"SafetyRuleArn"`
	Status           StatusEnum `json:"Status"`
	WaitPeriodMs     int64      `json:"WaitPeriodMs"`
}
