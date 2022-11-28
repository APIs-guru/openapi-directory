package shared

// InventoryCriterion
// This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
type InventoryCriterion struct {
	InventoryCriterionType *string         `json:"inventoryCriterionType,omitempty"`
	InventoryItems         []InventoryItem `json:"inventoryItems,omitempty"`
	ListingIds             []string        `json:"listingIds,omitempty"`
	RuleCriteria           *RuleCriteria   `json:"ruleCriteria,omitempty"`
}
