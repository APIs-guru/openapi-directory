package shared



type MarketplaceTargeting struct {
    DaypartTargeting *DayPartTargeting `json:"daypartTargeting,omitempty"`
    GeoTargeting *CriteriaTargeting `json:"geoTargeting,omitempty"`
    InventorySizeTargeting *InventorySizeTargeting `json:"inventorySizeTargeting,omitempty"`
    InventoryTypeTargeting *InventoryTypeTargeting `json:"inventoryTypeTargeting,omitempty"`
    PlacementTargeting *PlacementTargeting `json:"placementTargeting,omitempty"`
    TechnologyTargeting *TechnologyTargeting `json:"technologyTargeting,omitempty"`
    UserListTargeting *CriteriaTargeting `json:"userListTargeting,omitempty"`
    VideoTargeting *VideoTargeting `json:"videoTargeting,omitempty"`
    
}

