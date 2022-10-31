package shared



type IspPlacement struct {
    IspName *string `json:"IspName,omitempty"`
    PlacementStatistics *PlacementStatistics `json:"PlacementStatistics,omitempty"`
    
}

