package shared

type GetInventorySchemaResult struct {
	NextToken *string               `json:"NextToken"`
	Schemas   []InventoryItemSchema `json:"Schemas"`
}
