package shared

type RuleCriteria struct {
	ExcludeInventoryItems []InventoryItem `json:"excludeInventoryItems"`
	ExcludeListingIds     []string        `json:"excludeListingIds"`
	MarkupInventoryItems  []InventoryItem `json:"markupInventoryItems"`
	MarkupListingIds      []string        `json:"markupListingIds"`
	SelectionRules        []SelectionRule `json:"selectionRules"`
}
