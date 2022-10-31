package shared



type Fee struct {
    Amount *Amount `json:"amount,omitempty"`
    FeeMemo *string `json:"feeMemo,omitempty"`
    FeeType *string `json:"feeType,omitempty"`
    
}

