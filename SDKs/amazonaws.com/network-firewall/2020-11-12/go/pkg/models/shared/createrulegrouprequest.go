package shared

type CreateRuleGroupRequest struct {
	Capacity      int64             `json:"Capacity"`
	Description   *string           `json:"Description,omitempty"`
	DryRun        *bool             `json:"DryRun,omitempty"`
	RuleGroup     *RuleGroup        `json:"RuleGroup,omitempty"`
	RuleGroupName string            `json:"RuleGroupName"`
	Rules         *string           `json:"Rules,omitempty"`
	Tags          []Tag             `json:"Tags,omitempty"`
	Type          RuleGroupTypeEnum `json:"Type"`
}
