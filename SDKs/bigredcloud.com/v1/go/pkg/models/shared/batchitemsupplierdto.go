package shared

type BatchItemSupplierDto struct {
	Item   *SupplierDto `json:"item"`
	OpCode *int32       `json:"opCode"`
}
