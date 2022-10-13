package shared

type BatchItemSalesEntryDto struct {
	Item   *SalesEntryDto `json:"item"`
	OpCode *int32         `json:"opCode"`
}
