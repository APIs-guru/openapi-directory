package shared

type ListInventoryEntriesRequest struct {
	Filters    []InventoryFilter `json:"Filters"`
	InstanceID string            `json:"InstanceId"`
	MaxResults *int64            `json:"MaxResults"`
	NextToken  *string           `json:"NextToken"`
	TypeName   string            `json:"TypeName"`
}
