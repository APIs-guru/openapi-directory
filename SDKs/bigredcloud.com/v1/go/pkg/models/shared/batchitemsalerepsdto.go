package shared

type BatchItemSaleRepsDto struct {
	Item   *SaleRepsDto `json:"item"`
	OpCode *int32       `json:"opCode"`
}
