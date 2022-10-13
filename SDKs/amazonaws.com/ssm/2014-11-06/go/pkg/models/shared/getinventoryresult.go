package shared

type GetInventoryResult struct {
	Entities  []InventoryResultEntity `json:"Entities"`
	NextToken *string                 `json:"NextToken"`
}
