package shared

// AutoMls3DataSource
// The Amazon S3 data source.
type AutoMls3DataSource struct {
	S3DataType AutoMls3DataTypeEnum `json:"S3DataType"`
	S3URI      string               `json:"S3Uri"`
}
