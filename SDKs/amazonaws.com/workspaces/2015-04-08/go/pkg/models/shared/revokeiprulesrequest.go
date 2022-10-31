package shared



type RevokeIPRulesRequest struct {
    GroupID string `json:"GroupId"`
    UserRules []string `json:"UserRules"`
    
}

