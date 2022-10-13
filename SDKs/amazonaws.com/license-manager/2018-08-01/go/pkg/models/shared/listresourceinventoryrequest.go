package shared

type ListResourceInventoryRequest struct {
	Filters    []InventoryFilter `json:"Filters"`
	MaxResults *int64            `json:"MaxResults"`
	NextToken  *string           `json:"NextToken"`
}
