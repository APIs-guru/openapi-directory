package shared

// ListTableSpecsResponse
// Response message for AutoMl.ListTableSpecs.
type ListTableSpecsResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	TableSpecs    []TableSpec `json:"tableSpecs,omitempty"`
}
