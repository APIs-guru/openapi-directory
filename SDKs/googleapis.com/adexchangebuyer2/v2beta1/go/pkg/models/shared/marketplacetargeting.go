package shared

type MarketplaceTargeting struct {
	GeoTargeting           *CriteriaTargeting      `json:"geoTargeting"`
	InventorySizeTargeting *InventorySizeTargeting `json:"inventorySizeTargeting"`
	PlacementTargeting     *PlacementTargeting     `json:"placementTargeting"`
	TechnologyTargeting    *TechnologyTargeting    `json:"technologyTargeting"`
	VideoTargeting         *VideoTargeting         `json:"videoTargeting"`
}
