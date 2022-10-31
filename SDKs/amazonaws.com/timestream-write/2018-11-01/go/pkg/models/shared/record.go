package shared



type Record struct {
    Dimensions []Dimension `json:"Dimensions,omitempty"`
    MeasureName *string `json:"MeasureName,omitempty"`
    MeasureValue *string `json:"MeasureValue,omitempty"`
    MeasureValueType *MeasureValueTypeEnum `json:"MeasureValueType,omitempty"`
    Time *string `json:"Time,omitempty"`
    TimeUnit *TimeUnitEnum `json:"TimeUnit,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}

