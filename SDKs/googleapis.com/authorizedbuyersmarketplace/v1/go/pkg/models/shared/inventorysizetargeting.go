package shared

// InventorySizeTargeting
// Represents the size of an ad unit that can be targeted on a bid request.
type InventorySizeTargeting struct {
	ExcludedInventorySizes []AdSize `json:"excludedInventorySizes,omitempty"`
	TargetedInventorySizes []AdSize `json:"targetedInventorySizes,omitempty"`
}
