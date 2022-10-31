package shared



type ItvCardDetails struct {
    CardType string `json:"card_type"`
    ExpMonth int32 `json:"exp_month"`
    ExpYear int32 `json:"exp_year"`
    Last4 string `json:"last4"`
    
}

