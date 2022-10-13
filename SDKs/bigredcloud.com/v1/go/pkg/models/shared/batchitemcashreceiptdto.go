package shared

type BatchItemCashReceiptDto struct {
	Item   *CashReceiptDto `json:"item"`
	OpCode *int32          `json:"opCode"`
}
