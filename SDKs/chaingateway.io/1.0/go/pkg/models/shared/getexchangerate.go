package shared



type GetExchangeRate struct {
    Currency string `json:"currency"`
    Ok bool `json:"ok"`
    Rate float64 `json:"rate"`
    
}

