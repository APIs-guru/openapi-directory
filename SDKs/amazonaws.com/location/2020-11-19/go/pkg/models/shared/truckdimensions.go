package shared

type TruckDimensions struct {
	Height *float64           `json:"Height"`
	Length *float64           `json:"Length"`
	Unit   *DimensionUnitEnum `json:"Unit"`
	Width  *float64           `json:"Width"`
}
