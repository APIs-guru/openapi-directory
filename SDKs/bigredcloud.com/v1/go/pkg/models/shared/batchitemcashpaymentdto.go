package shared

type BatchItemCashPaymentDto struct {
	Item   *CashPaymentDto `json:"item"`
	OpCode *int32          `json:"opCode"`
}
