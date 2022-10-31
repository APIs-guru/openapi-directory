package shared



type InventoryItemSchema struct {
    Attributes []InventoryItemAttribute `json:"Attributes"`
    DisplayName *string `json:"DisplayName,omitempty"`
    TypeName string `json:"TypeName"`
    Version *string `json:"Version,omitempty"`
    
}

