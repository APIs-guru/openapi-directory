package shared



type Condition struct {
    Conditions []SimpleCondition `json:"Conditions,omitempty"`
    Operator *OperatorEnum `json:"Operator,omitempty"`
    
}

