package shared

// ListRowsResponse
// Response message for TablesService.ListRows.
type ListRowsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Rows          []Row   `json:"rows,omitempty"`
}
