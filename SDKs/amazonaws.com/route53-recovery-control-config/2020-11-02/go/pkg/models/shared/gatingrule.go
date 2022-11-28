package shared

// GatingRule
// A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
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
