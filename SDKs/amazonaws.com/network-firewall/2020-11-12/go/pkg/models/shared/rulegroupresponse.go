package shared

type RuleGroupResponse struct {
	Capacity        *int64              `json:"Capacity"`
	Description     *string             `json:"Description"`
	RuleGroupArn    string              `json:"RuleGroupArn"`
	RuleGroupID     string              `json:"RuleGroupId"`
	RuleGroupName   string              `json:"RuleGroupName"`
	RuleGroupStatus *ResourceStatusEnum `json:"RuleGroupStatus"`
	Tags            []Tag               `json:"Tags"`
	Type            *RuleGroupTypeEnum  `json:"Type"`
}
