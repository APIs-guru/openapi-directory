package shared

type BulkCreateAdsByInventoryReferenceRequest struct {
	Requests []CreateAdsByInventoryReferenceRequest `json:"requests"`
}
