package shared



type ListResourceInventoryResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResourceInventoryList []ResourceInventory `json:"ResourceInventoryList,omitempty"`
    
}

