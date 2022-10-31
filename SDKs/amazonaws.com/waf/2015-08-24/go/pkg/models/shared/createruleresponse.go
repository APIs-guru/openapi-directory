package shared



type CreateRuleResponse struct {
    ChangeToken *string `json:"ChangeToken,omitempty"`
    Rule *Rule `json:"Rule,omitempty"`
    
}

