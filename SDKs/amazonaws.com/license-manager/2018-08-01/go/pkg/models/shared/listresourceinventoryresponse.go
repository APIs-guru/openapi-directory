package shared

type ListResourceInventoryResponse struct {
	NextToken             *string             `json:"NextToken"`
	ResourceInventoryList []ResourceInventory `json:"ResourceInventoryList"`
}
