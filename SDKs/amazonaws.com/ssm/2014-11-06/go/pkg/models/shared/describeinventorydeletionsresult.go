package shared

type DescribeInventoryDeletionsResult struct {
	InventoryDeletions []InventoryDeletionStatusItem `json:"InventoryDeletions"`
	NextToken          *string                       `json:"NextToken"`
}
