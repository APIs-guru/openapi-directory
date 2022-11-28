package shared

// RuleCriteria
// This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
type RuleCriteria struct {
	ExcludeInventoryItems []InventoryItem `json:"excludeInventoryItems,omitempty"`
	ExcludeListingIds     []string        `json:"excludeListingIds,omitempty"`
	MarkupInventoryItems  []InventoryItem `json:"markupInventoryItems,omitempty"`
	MarkupListingIds      []string        `json:"markupListingIds,omitempty"`
	SelectionRules        []SelectionRule `json:"selectionRules,omitempty"`
}
