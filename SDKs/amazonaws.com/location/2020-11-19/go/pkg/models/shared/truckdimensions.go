package shared



type TruckDimensions struct {
    Height *float64 `json:"Height,omitempty"`
    Length *float64 `json:"Length,omitempty"`
    Unit *DimensionUnitEnum `json:"Unit,omitempty"`
    Width *float64 `json:"Width,omitempty"`
    
}

