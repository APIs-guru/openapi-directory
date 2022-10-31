package shared

type BulkDeleteAdsByInventoryReferenceRequest struct {
	Requests []DeleteAdsByInventoryReferenceRequest `json:"requests,omitempty"`
}
