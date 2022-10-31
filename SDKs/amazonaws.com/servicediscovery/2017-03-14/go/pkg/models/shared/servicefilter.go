package shared



type ServiceFilter struct {
    Condition *FilterConditionEnum `json:"Condition,omitempty"`
    Name ServiceFilterNameEnum `json:"Name"`
    Values []string `json:"Values"`
    
}

