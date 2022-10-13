package shared

type AuthorizeIPRulesRequest struct {
	GroupID   string       `json:"GroupId"`
	UserRules []IPRuleItem `json:"UserRules"`
}
