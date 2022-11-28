package shared

// WorkspacesIPGroup
// Describes an IP access control group.
type WorkspacesIPGroup struct {
	GroupDesc *string      `json:"groupDesc,omitempty"`
	GroupID   *string      `json:"groupId,omitempty"`
	GroupName *string      `json:"groupName,omitempty"`
	UserRules []IPRuleItem `json:"userRules,omitempty"`
}
