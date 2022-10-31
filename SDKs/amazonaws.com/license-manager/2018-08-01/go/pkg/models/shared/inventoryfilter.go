package shared



type InventoryFilter struct {
    Condition InventoryFilterConditionEnum `json:"Condition"`
    Name string `json:"Name"`
    Value *string `json:"Value,omitempty"`
    
}

