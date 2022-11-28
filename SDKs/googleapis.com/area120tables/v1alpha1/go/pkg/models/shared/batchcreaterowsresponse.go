package shared

// BatchCreateRowsResponse
// Response message for TablesService.BatchCreateRows.
type BatchCreateRowsResponse struct {
	Rows []Row `json:"rows,omitempty"`
}
