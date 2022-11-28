package shared

// Dimension
// Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
type Dimension struct {
	DimensionValueType *DimensionValueTypeEnum `json:"DimensionValueType,omitempty"`
	Name               string                  `json:"Name"`
	Value              string                  `json:"Value"`
}
