package shared

// Pivot
// The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
type Pivot struct {
	DimensionFilterClauses []DimensionFilterClause `json:"dimensionFilterClauses,omitempty"`
	Dimensions             []Dimension             `json:"dimensions,omitempty"`
	MaxGroupCount          *int32                  `json:"maxGroupCount,omitempty"`
	Metrics                []Metric                `json:"metrics,omitempty"`
	StartGroup             *int32                  `json:"startGroup,omitempty"`
}
