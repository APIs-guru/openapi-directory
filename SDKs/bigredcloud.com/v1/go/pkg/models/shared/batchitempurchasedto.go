package shared



type BatchItemPurchaseDto struct {
    Item *PurchaseDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

