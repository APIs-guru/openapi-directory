package shared

type InventoryCriterion struct {
	InventoryCriterionType *string         `json:"inventoryCriterionType"`
	InventoryItems         []InventoryItem `json:"inventoryItems"`
	ListingIds             []string        `json:"listingIds"`
	RuleCriteria           *RuleCriteria   `json:"ruleCriteria"`
}
