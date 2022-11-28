package shared

// RuleGroupResponse
// The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
type RuleGroupResponse struct {
	Capacity        *int64              `json:"Capacity,omitempty"`
	Description     *string             `json:"Description,omitempty"`
	RuleGroupArn    string              `json:"RuleGroupArn"`
	RuleGroupID     string              `json:"RuleGroupId"`
	RuleGroupName   string              `json:"RuleGroupName"`
	RuleGroupStatus *ResourceStatusEnum `json:"RuleGroupStatus,omitempty"`
	Tags            []Tag               `json:"Tags,omitempty"`
	Type            *RuleGroupTypeEnum  `json:"Type,omitempty"`
}
