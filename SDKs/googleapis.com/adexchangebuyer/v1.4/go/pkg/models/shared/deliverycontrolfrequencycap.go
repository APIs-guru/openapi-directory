package shared



type DeliveryControlFrequencyCap struct {
    MaxImpressions *int32 `json:"maxImpressions,omitempty"`
    NumTimeUnits *int32 `json:"numTimeUnits,omitempty"`
    TimeUnitType *string `json:"timeUnitType,omitempty"`
    
}

