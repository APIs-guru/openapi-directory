package shared

// TruckWeight
// Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>.
type TruckWeight struct {
	Total *float64               `json:"Total,omitempty"`
	Unit  *VehicleWeightUnitEnum `json:"Unit,omitempty"`
}
