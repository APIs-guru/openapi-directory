package shared



type BotFilter struct {
    Name BotFilterNameEnum `json:"name"`
    Operator BotFilterOperatorEnum `json:"operator"`
    Values []string `json:"values"`
    
}

