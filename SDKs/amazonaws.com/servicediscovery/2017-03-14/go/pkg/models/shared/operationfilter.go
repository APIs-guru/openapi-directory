package shared



type OperationFilter struct {
    Condition *FilterConditionEnum `json:"Condition,omitempty"`
    Name OperationFilterNameEnum `json:"Name"`
    Values []string `json:"Values"`
    
}

