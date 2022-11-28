package shared

// S3ReferenceDataSource
// <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p>
type S3ReferenceDataSource struct {
	BucketArn        string `json:"BucketARN"`
	FileKey          string `json:"FileKey"`
	ReferenceRoleArn string `json:"ReferenceRoleARN"`
}
