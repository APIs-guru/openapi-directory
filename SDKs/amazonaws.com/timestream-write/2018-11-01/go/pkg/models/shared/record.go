package shared

// Record
// Record represents a time series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the meta data attributes of a time series data point such as the instance name or availability zone of an EC2 instance. A record also contains the measure name which is the name of the measure being collected for example the CPU utilization of an EC2 instance. A record also contains the measure value and the value type which is the data type of the measure value. In addition, the record contains the timestamp when the measure was collected that the timestamp unit which represents the granularity of the timestamp.
type Record struct {
	Dimensions       []Dimension           `json:"Dimensions,omitempty"`
	MeasureName      *string               `json:"MeasureName,omitempty"`
	MeasureValue     *string               `json:"MeasureValue,omitempty"`
	MeasureValueType *MeasureValueTypeEnum `json:"MeasureValueType,omitempty"`
	Time             *string               `json:"Time,omitempty"`
	TimeUnit         *TimeUnitEnum         `json:"TimeUnit,omitempty"`
	Version          *int64                `json:"Version,omitempty"`
}
