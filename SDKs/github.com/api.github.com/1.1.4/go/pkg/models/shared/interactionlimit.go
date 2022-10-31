package shared



type InteractionLimit struct {
    Expiry *InteractionExpiryEnum `json:"expiry,omitempty"`
    Limit InteractionGroupEnum `json:"limit"`
    
}

