package shared



type Amount struct {
    ConvertedFromCurrency *string `json:"convertedFromCurrency,omitempty"`
    ConvertedFromValue *string `json:"convertedFromValue,omitempty"`
    Currency *string `json:"currency,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

