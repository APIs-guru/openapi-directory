package shared

type BulkDeleteAdsByInventoryReferenceResponse struct {
	Responses []DeleteAdsByInventoryReferenceResponse `json:"responses"`
}
