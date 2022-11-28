package shared

// EnrollDataSourcesRequest
// A request to enroll a set of data sources so they are visible in the BigQuery UI's `Transfer` tab.
type EnrollDataSourcesRequest struct {
	DataSourceIds []string `json:"dataSourceIds,omitempty"`
}
