package shared



type IntentFilter struct {
    Name IntentFilterNameEnum `json:"name"`
    Operator IntentFilterOperatorEnum `json:"operator"`
    Values []string `json:"values"`
    
}

