package shared



type SearchPlaceIndexForPositionSummary struct {
    DataSource string `json:"DataSource"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    Position []float64 `json:"Position"`
    
}

