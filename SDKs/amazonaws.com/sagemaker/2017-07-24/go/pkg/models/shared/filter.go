package shared



type Filter struct {
    Name string `json:"Name"`
    Operator *OperatorEnum `json:"Operator,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

