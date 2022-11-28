package shared

// BulkCreateAdRequest
// This type defines the fields for the create ads in bulk by listing IDs.
type BulkCreateAdRequest struct {
	Requests []CreateAdRequest `json:"requests,omitempty"`
}
