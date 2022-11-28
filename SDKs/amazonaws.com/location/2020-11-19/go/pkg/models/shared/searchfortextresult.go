package shared

// SearchForTextResult
// Contains relevant Places returned by calling <code>SearchPlaceIndexForText</code>.
type SearchForTextResult struct {
	Place Place `json:"Place"`
}
