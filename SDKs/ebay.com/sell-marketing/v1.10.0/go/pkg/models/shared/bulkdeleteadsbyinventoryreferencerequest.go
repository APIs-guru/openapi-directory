package shared

// BulkDeleteAdsByInventoryReferenceRequest
// This type defines the request fields that bulkDeleteAdsByInventoryReference uses to delete ads in bulk.
type BulkDeleteAdsByInventoryReferenceRequest struct {
	Requests []DeleteAdsByInventoryReferenceRequest `json:"requests,omitempty"`
}
