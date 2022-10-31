package shared

type WorkspacesIPGroup struct {
	GroupDesc *string      `json:"groupDesc,omitempty"`
	GroupID   *string      `json:"groupId,omitempty"`
	GroupName *string      `json:"groupName,omitempty"`
	UserRules []IPRuleItem `json:"userRules,omitempty"`
}
