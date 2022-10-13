package shared

type CreateIPGroupRequest struct {
	GroupDesc *string      `json:"GroupDesc"`
	GroupName string       `json:"GroupName"`
	Tags      []Tag        `json:"Tags"`
	UserRules []IPRuleItem `json:"UserRules"`
}
