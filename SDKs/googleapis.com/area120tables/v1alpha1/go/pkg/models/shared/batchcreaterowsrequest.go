package shared

// BatchCreateRowsRequest
// Request message for TablesService.BatchCreateRows.
type BatchCreateRowsRequest struct {
	Requests []CreateRowRequest `json:"requests,omitempty"`
}
