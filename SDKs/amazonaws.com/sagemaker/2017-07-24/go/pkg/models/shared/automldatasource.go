package shared

// AutoMlDataSource
// The data source for the Autopilot job.
type AutoMlDataSource struct {
	S3DataSource AutoMls3DataSource `json:"S3DataSource"`
}
