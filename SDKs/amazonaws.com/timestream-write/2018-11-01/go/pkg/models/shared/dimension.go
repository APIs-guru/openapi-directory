package shared

type Dimension struct {
	DimensionValueType *DimensionValueTypeEnum `json:"DimensionValueType"`
	Name               string                  `json:"Name"`
	Value              string                  `json:"Value"`
}
