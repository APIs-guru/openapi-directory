package shared



type SellingLimit struct {
    Amount *Amount `json:"amount,omitempty"`
    Quantity *int32 `json:"quantity,omitempty"`
    
}

