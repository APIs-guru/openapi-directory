package shared

// BulkAdResponse
// This type defines the fields for the create ads in bulk response.
type BulkAdResponse struct {
	Responses []AdResponse `json:"responses,omitempty"`
}
