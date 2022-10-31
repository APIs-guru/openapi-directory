package shared



type Tax struct {
    Amount *Amount `json:"amount,omitempty"`
    TaxType *string `json:"taxType,omitempty"`
    
}

