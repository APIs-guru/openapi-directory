package shared



type BatchItemCustomerDto struct {
    Item *CustomerDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

