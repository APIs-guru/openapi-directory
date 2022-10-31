package shared

type BulkCreateAdsByInventoryReferenceResponse struct {
	Responses []CreateAdsByInventoryReferenceResponse `json:"responses,omitempty"`
}
