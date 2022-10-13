package shared

type BatchItemPaymentDto struct {
	Item   *PaymentDto `json:"item"`
	OpCode *int32      `json:"opCode"`
}
