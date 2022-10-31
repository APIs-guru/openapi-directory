package shared

type CommunicationCostPage struct {
	Pagination *OffsetInfo         `json:"pagination,omitempty"`
	Results    []CommunicationCost `json:"results,omitempty"`
}
