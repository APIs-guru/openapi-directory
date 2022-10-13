package shared

type BatchItemProductDto struct {
	Item   *ProductDto `json:"item"`
	OpCode *int32      `json:"opCode"`
}
