package shared



type BatchItemPaymentDto struct {
    Item *PaymentDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

