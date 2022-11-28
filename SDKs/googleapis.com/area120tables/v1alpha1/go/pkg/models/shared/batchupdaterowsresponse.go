package shared

// BatchUpdateRowsResponse
// Response message for TablesService.BatchUpdateRows.
type BatchUpdateRowsResponse struct {
	Rows []Row `json:"rows,omitempty"`
}
