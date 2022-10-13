package shared

type WorkspacesIPGroup struct {
	GroupDesc *string      `json:"groupDesc"`
	GroupID   *string      `json:"groupId"`
	GroupName *string      `json:"groupName"`
	UserRules []IPRuleItem `json:"userRules"`
}
