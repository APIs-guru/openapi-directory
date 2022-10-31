package shared

type BatchItemSalesEntryDto struct {
	Item   *SalesEntryDto `json:"item,omitempty"`
	OpCode *int32         `json:"opCode,omitempty"`
}
