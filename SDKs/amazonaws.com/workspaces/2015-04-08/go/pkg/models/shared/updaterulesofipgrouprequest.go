package shared



type UpdateRulesOfIPGroupRequest struct {
    GroupID string `json:"GroupId"`
    UserRules []IPRuleItem `json:"UserRules"`
    
}

