package shared

type MarketplaceTargeting struct {
	DaypartTargeting       *DayPartTargeting       `json:"daypartTargeting"`
	GeoTargeting           *CriteriaTargeting      `json:"geoTargeting"`
	InventorySizeTargeting *InventorySizeTargeting `json:"inventorySizeTargeting"`
	InventoryTypeTargeting *InventoryTypeTargeting `json:"inventoryTypeTargeting"`
	PlacementTargeting     *PlacementTargeting     `json:"placementTargeting"`
	TechnologyTargeting    *TechnologyTargeting    `json:"technologyTargeting"`
	UserListTargeting      *CriteriaTargeting      `json:"userListTargeting"`
	VideoTargeting         *VideoTargeting         `json:"videoTargeting"`
}
