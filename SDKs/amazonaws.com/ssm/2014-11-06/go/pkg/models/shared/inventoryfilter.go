package shared



type InventoryFilter struct {
    Key string `json:"Key"`
    Type *InventoryQueryOperatorTypeEnum `json:"Type,omitempty"`
    Values []string `json:"Values"`
    
}

