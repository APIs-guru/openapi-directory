package shared

type TruckWeight struct {
	Total *float64               `json:"Total"`
	Unit  *VehicleWeightUnitEnum `json:"Unit"`
}
