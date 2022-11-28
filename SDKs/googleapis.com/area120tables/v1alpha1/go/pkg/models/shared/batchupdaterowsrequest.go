package shared

// BatchUpdateRowsRequest
// Request message for TablesService.BatchUpdateRows.
type BatchUpdateRowsRequest struct {
	Requests []UpdateRowRequest `json:"requests,omitempty"`
}
