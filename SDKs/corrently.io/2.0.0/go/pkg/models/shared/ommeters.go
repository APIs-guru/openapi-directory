package shared

type Ommeters struct {
	CurrentScalingFactor *int64  `json:"currentScalingFactor"`
	LoadProfileType      *string `json:"loadProfileType"`
	Location             *string `json:"location"`
	ManufacturerID       *string `json:"manufacturerId"`
	MeasurementType      *string `json:"measurementType"`
	Meta                 *string `json:"meta"`
	MeterID              *string `json:"meterId"`
	ScalingFactor        *int64  `json:"scalingFactor"`
	Type                 *string `json:"type"`
	VoltageScalingFactor *int64  `json:"voltageScalingFactor"`
}
