package shared

// BulkDeleteAdRequest
// This type defines the fields that the call uses to remove ads in bulk.
type BulkDeleteAdRequest struct {
	Requests []DeleteAdRequest `json:"requests,omitempty"`
}
