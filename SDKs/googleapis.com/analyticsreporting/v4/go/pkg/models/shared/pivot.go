package shared

type Pivot struct {
	DimensionFilterClauses []DimensionFilterClause `json:"dimensionFilterClauses"`
	Dimensions             []Dimension             `json:"dimensions"`
	MaxGroupCount          *int32                  `json:"maxGroupCount"`
	Metrics                []Metric                `json:"metrics"`
	StartGroup             *int32                  `json:"startGroup"`
}
