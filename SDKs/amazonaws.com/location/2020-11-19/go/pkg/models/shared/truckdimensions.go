package shared

// TruckDimensions
// Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>.
type TruckDimensions struct {
	Height *float64           `json:"Height,omitempty"`
	Length *float64           `json:"Length,omitempty"`
	Unit   *DimensionUnitEnum `json:"Unit,omitempty"`
	Width  *float64           `json:"Width,omitempty"`
}
