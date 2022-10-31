package shared



type GetInventorySchemaResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Schemas []InventoryItemSchema `json:"Schemas,omitempty"`
    
}

