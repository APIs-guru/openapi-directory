package shared

// BulkCreateAdsByInventoryReferenceRequest
// This type defines the fields used to create ads in bulk by inventory reference IDs.
type BulkCreateAdsByInventoryReferenceRequest struct {
	Requests []CreateAdsByInventoryReferenceRequest `json:"requests,omitempty"`
}
