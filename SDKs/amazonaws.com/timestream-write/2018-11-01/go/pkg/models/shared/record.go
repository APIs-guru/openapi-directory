package shared

type Record struct {
	Dimensions       []Dimension           `json:"Dimensions"`
	MeasureName      *string               `json:"MeasureName"`
	MeasureValue     *string               `json:"MeasureValue"`
	MeasureValueType *MeasureValueTypeEnum `json:"MeasureValueType"`
	Time             *string               `json:"Time"`
	TimeUnit         *TimeUnitEnum         `json:"TimeUnit"`
	Version          *int64                `json:"Version"`
}
