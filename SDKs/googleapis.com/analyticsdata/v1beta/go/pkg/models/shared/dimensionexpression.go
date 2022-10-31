package shared



type DimensionExpression struct {
    Concatenate *ConcatenateExpression `json:"concatenate,omitempty"`
    LowerCase *CaseExpression `json:"lowerCase,omitempty"`
    UpperCase *CaseExpression `json:"upperCase,omitempty"`
    
}

