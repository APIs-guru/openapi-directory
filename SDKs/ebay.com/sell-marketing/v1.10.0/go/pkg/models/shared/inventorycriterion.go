package shared



type InventoryCriterion struct {
    InventoryCriterionType *string `json:"inventoryCriterionType,omitempty"`
    InventoryItems []InventoryItem `json:"inventoryItems,omitempty"`
    ListingIds []string `json:"listingIds,omitempty"`
    RuleCriteria *RuleCriteria `json:"ruleCriteria,omitempty"`
    
}

