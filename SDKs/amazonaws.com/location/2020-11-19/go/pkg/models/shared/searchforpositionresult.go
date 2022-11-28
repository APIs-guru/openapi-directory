package shared

// SearchForPositionResult
// Specifies a single point of interest, or Place as a result of a search query obtained from a dataset configured in the place index resource.
type SearchForPositionResult struct {
	Place Place `json:"Place"`
}
