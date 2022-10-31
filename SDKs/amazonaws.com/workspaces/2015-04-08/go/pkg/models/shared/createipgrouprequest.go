package shared

type CreateIPGroupRequest struct {
	GroupDesc *string      `json:"GroupDesc,omitempty"`
	GroupName string       `json:"GroupName"`
	Tags      []Tag        `json:"Tags,omitempty"`
	UserRules []IPRuleItem `json:"UserRules,omitempty"`
}
