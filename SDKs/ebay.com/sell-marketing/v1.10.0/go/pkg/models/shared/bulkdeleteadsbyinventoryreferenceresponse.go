package shared

// BulkDeleteAdsByInventoryReferenceResponse
// This type defines a container that lists the ads that bulkDeleteAdsByInventoryReference deleted.
type BulkDeleteAdsByInventoryReferenceResponse struct {
	Responses []DeleteAdsByInventoryReferenceResponse `json:"responses,omitempty"`
}
