package shared

// MarketplaceTargeting
// Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
type MarketplaceTargeting struct {
	GeoTargeting           *CriteriaTargeting      `json:"geoTargeting,omitempty"`
	InventorySizeTargeting *InventorySizeTargeting `json:"inventorySizeTargeting,omitempty"`
	PlacementTargeting     *PlacementTargeting     `json:"placementTargeting,omitempty"`
	TechnologyTargeting    *TechnologyTargeting    `json:"technologyTargeting,omitempty"`
	VideoTargeting         *VideoTargeting         `json:"videoTargeting,omitempty"`
}
