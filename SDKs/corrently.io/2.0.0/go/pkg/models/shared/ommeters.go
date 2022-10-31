package shared



type Ommeters struct {
    CurrentScalingFactor *int64 `json:"currentScalingFactor,omitempty"`
    LoadProfileType *string `json:"loadProfileType,omitempty"`
    Location *string `json:"location,omitempty"`
    ManufacturerID *string `json:"manufacturerId,omitempty"`
    MeasurementType *string `json:"measurementType,omitempty"`
    Meta *string `json:"meta,omitempty"`
    MeterID *string `json:"meterId,omitempty"`
    ScalingFactor *int64 `json:"scalingFactor,omitempty"`
    Type *string `json:"type,omitempty"`
    VoltageScalingFactor *int64 `json:"voltageScalingFactor,omitempty"`
    
}

