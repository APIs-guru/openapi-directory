package shared

type GatingRule struct {
	ControlPanelArn string     `json:"ControlPanelArn"`
	GatingControls  []string   `json:"GatingControls"`
	Name            string     `json:"Name"`
	RuleConfig      RuleConfig `json:"RuleConfig"`
	SafetyRuleArn   string     `json:"SafetyRuleArn"`
	Status          StatusEnum `json:"Status"`
	TargetControls  []string   `json:"TargetControls"`
	WaitPeriodMs    int64      `json:"WaitPeriodMs"`
}
