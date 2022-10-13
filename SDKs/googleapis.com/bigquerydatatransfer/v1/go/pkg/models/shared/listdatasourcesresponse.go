package shared

type ListDataSourcesResponse struct {
	DataSources   []DataSource `json:"dataSources"`
	NextPageToken *string      `json:"nextPageToken"`
}
