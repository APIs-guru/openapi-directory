package shared

// ListColumnSpecsResponse
// Response message for AutoMl.ListColumnSpecs.
type ListColumnSpecsResponse struct {
	ColumnSpecs   []ColumnSpec `json:"columnSpecs,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
