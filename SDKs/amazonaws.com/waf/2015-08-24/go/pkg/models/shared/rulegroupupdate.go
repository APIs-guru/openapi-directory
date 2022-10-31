package shared



type RuleGroupUpdate struct {
    Action ChangeActionEnum `json:"Action"`
    ActivatedRule ActivatedRule `json:"ActivatedRule"`
    
}

