package shared



type Pivot struct {
    DimensionFilterClauses []DimensionFilterClause `json:"dimensionFilterClauses,omitempty"`
    Dimensions []Dimension `json:"dimensions,omitempty"`
    MaxGroupCount *int32 `json:"maxGroupCount,omitempty"`
    Metrics []Metric `json:"metrics,omitempty"`
    StartGroup *int32 `json:"startGroup,omitempty"`
    
}

