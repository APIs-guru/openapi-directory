package shared

type GetInventoryResult struct {
	Entities  []InventoryResultEntity `json:"Entities,omitempty"`
	NextToken *string                 `json:"NextToken,omitempty"`
}
