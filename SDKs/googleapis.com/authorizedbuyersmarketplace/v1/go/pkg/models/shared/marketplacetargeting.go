package shared

// MarketplaceTargeting
// Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
type MarketplaceTargeting struct {
	DaypartTargeting       *DayPartTargeting       `json:"daypartTargeting,omitempty"`
	GeoTargeting           *CriteriaTargeting      `json:"geoTargeting,omitempty"`
	InventorySizeTargeting *InventorySizeTargeting `json:"inventorySizeTargeting,omitempty"`
	InventoryTypeTargeting *InventoryTypeTargeting `json:"inventoryTypeTargeting,omitempty"`
	PlacementTargeting     *PlacementTargeting     `json:"placementTargeting,omitempty"`
	TechnologyTargeting    *TechnologyTargeting    `json:"technologyTargeting,omitempty"`
	UserListTargeting      *CriteriaTargeting      `json:"userListTargeting,omitempty"`
	VideoTargeting         *VideoTargeting         `json:"videoTargeting,omitempty"`
}
