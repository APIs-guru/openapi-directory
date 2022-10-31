package shared



type BatchItemBankAccountDto struct {
    Item *BankAccountDto `json:"item,omitempty"`
    OpCode *int32 `json:"opCode,omitempty"`
    
}

