package shared

type BatchItemSupplierDto struct {
	Item   *SupplierDto `json:"item,omitempty"`
	OpCode *int32       `json:"opCode,omitempty"`
}
