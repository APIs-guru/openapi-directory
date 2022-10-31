package shared



type SlotFilter struct {
    Name SlotFilterNameEnum `json:"name"`
    Operator SlotFilterOperatorEnum `json:"operator"`
    Values []string `json:"values"`
    
}

