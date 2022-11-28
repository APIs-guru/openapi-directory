package shared

// S3Configuration
// For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.
type S3Configuration struct {
	BucketArn string `json:"BucketARN"`
	FileKey   string `json:"FileKey"`
}
