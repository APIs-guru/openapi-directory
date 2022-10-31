package shared



type BatchItemProductDto struct {
    Item *ProductDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

