package shared

type CreateRuleGroupRequest struct {
	Capacity      int64             `json:"Capacity"`
	Description   *string           `json:"Description"`
	DryRun        *bool             `json:"DryRun"`
	RuleGroup     *RuleGroup        `json:"RuleGroup"`
	RuleGroupName string            `json:"RuleGroupName"`
	Rules         *string           `json:"Rules"`
	Tags          []Tag             `json:"Tags"`
	Type          RuleGroupTypeEnum `json:"Type"`
}
