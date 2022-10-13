package shared

type CommunicationCostPage struct {
	Pagination *OffsetInfo         `json:"pagination"`
	Results    []CommunicationCost `json:"results"`
}
