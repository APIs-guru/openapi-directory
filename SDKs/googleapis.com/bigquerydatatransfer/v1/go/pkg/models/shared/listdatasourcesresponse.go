package shared

type ListDataSourcesResponse struct {
	DataSources   []DataSource `json:"dataSources,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
