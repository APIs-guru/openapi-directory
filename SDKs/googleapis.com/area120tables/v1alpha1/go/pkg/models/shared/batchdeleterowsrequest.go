package shared

// BatchDeleteRowsRequest
// Request message for TablesService.BatchDeleteRows
type BatchDeleteRowsRequest struct {
	Names []string `json:"names,omitempty"`
}
