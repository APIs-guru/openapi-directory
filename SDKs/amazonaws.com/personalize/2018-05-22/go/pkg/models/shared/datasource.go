package shared

// DataSource
// Describes the data source that contains the data to upload to a dataset.
type DataSource struct {
	DataLocation *string `json:"dataLocation,omitempty"`
}
