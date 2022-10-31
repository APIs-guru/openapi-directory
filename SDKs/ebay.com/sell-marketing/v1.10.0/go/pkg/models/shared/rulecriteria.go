package shared



type RuleCriteria struct {
    ExcludeInventoryItems []InventoryItem `json:"excludeInventoryItems,omitempty"`
    ExcludeListingIds []string `json:"excludeListingIds,omitempty"`
    MarkupInventoryItems []InventoryItem `json:"markupInventoryItems,omitempty"`
    MarkupListingIds []string `json:"markupListingIds,omitempty"`
    SelectionRules []SelectionRule `json:"selectionRules,omitempty"`
    
}

