package shared

type BatchItemPurchaseDto struct {
	Item   *PurchaseDto `json:"item"`
	OpCode *int32       `json:"opCode"`
}
