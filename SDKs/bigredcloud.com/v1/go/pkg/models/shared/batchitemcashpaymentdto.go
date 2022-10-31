package shared



type BatchItemCashPaymentDto struct {
    Item *CashPaymentDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

