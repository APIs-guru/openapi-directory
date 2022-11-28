package shared

// ListDataSourcesResponse
// Returns list of supported data sources and their metadata.
type ListDataSourcesResponse struct {
	DataSources   []DataSource `json:"dataSources,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
