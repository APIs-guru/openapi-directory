package shared

type ListPageReceiptsResult struct {
	NextToken *string   `json:"NextToken"`
	Receipts  []Receipt `json:"Receipts"`
}
