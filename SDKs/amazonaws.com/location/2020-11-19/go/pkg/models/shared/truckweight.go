package shared



type TruckWeight struct {
    Total *float64 `json:"Total,omitempty"`
    Unit *VehicleWeightUnitEnum `json:"Unit,omitempty"`
    
}

