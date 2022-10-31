package shared



type MarketplaceTargeting struct {
    GeoTargeting *CriteriaTargeting `json:"geoTargeting,omitempty"`
    InventorySizeTargeting *InventorySizeTargeting `json:"inventorySizeTargeting,omitempty"`
    PlacementTargeting *PlacementTargeting `json:"placementTargeting,omitempty"`
    TechnologyTargeting *TechnologyTargeting `json:"technologyTargeting,omitempty"`
    VideoTargeting *VideoTargeting `json:"videoTargeting,omitempty"`
    
}

