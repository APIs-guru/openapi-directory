package shared

// ListTablesResponse
// Response message for TablesService.ListTables.
type ListTablesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tables        []Table `json:"tables,omitempty"`
}
