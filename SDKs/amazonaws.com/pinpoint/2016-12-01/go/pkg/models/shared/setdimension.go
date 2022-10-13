package shared

type SetDimension struct {
	DimensionType *DimensionTypeEnum `json:"DimensionType"`
	Values        []string           `json:"Values"`
}
