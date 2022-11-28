package shared

// SearchPlaceIndexForPositionSummary
// A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
type SearchPlaceIndexForPositionSummary struct {
	DataSource string    `json:"DataSource"`
	MaxResults *int64    `json:"MaxResults,omitempty"`
	Position   []float64 `json:"Position"`
}
