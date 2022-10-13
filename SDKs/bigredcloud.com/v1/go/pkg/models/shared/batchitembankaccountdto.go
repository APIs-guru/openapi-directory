package shared

type BatchItemBankAccountDto struct {
	Item   *BankAccountDto `json:"item"`
	OpCode *int32          `json:"opCode"`
}
