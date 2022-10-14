package shared

type BatchItemSaleRepsDto struct {
	Item   *SaleRepsDto `json:"item,omitempty"`
	OpCode *int32       `json:"opCode,omitempty"`
}
