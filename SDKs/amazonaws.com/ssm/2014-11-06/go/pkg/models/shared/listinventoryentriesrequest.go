package shared

type ListInventoryEntriesRequest struct {
	Filters    []InventoryFilter `json:"Filters,omitempty"`
	InstanceID string            `json:"InstanceId"`
	MaxResults *int64            `json:"MaxResults,omitempty"`
	NextToken  *string           `json:"NextToken,omitempty"`
	TypeName   string            `json:"TypeName"`
}
