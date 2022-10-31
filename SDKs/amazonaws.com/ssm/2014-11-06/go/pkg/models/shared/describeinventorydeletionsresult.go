package shared

type DescribeInventoryDeletionsResult struct {
	InventoryDeletions []InventoryDeletionStatusItem `json:"InventoryDeletions,omitempty"`
	NextToken          *string                       `json:"NextToken,omitempty"`
}
