package shared



type BatchItemCashReceiptDto struct {
    Item *CashReceiptDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

