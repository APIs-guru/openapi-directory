package shared

type GetInventoryRequest struct {
	Aggregators      []InventoryAggregator `json:"Aggregators"`
	Filters          []InventoryFilter     `json:"Filters"`
	MaxResults       *int64                `json:"MaxResults"`
	NextToken        *string               `json:"NextToken"`
	ResultAttributes []ResultAttribute     `json:"ResultAttributes"`
}
