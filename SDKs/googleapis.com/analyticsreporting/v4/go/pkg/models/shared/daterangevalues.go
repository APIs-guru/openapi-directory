package shared

// DateRangeValues
// Used to return a list of metrics for a single DateRange / dimension combination
type DateRangeValues struct {
	PivotValueRegions []PivotValueRegion `json:"pivotValueRegions,omitempty"`
	Values            []string           `json:"values,omitempty"`
}
