package shared

// InventorySizeTargeting
// Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
type InventorySizeTargeting struct {
	ExcludedInventorySizes []AdSize `json:"excludedInventorySizes,omitempty"`
	TargetedInventorySizes []AdSize `json:"targetedInventorySizes,omitempty"`
}
