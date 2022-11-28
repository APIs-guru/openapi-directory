package shared

// BulkDeleteAdResponse
// This type defines a container that lists the ads that bulkDeleteAdsByListingId deleted.
type BulkDeleteAdResponse struct {
	Responses []DeleteAdResponse `json:"responses,omitempty"`
}
