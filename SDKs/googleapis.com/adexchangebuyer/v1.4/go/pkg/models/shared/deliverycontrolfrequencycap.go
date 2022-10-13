package shared

type DeliveryControlFrequencyCap struct {
	MaxImpressions *int32  `json:"maxImpressions"`
	NumTimeUnits   *int32  `json:"numTimeUnits"`
	TimeUnitType   *string `json:"timeUnitType"`
}
