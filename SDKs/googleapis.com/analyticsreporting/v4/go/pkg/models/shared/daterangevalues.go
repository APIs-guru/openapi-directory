package shared

type DateRangeValues struct {
	PivotValueRegions []PivotValueRegion `json:"pivotValueRegions"`
	Values            []string           `json:"values"`
}
