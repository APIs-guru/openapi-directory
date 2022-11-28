package shared

// BulkCreateAdsByInventoryReferenceResponse
// This type defines the response fields used by the bulkCreateAdsByInventoryReference method.
type BulkCreateAdsByInventoryReferenceResponse struct {
	Responses []CreateAdsByInventoryReferenceResponse `json:"responses,omitempty"`
}
