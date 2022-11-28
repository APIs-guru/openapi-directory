package shared

// KinesisFirehoseDestination
// An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
type KinesisFirehoseDestination struct {
	DeliveryStreamArn string `json:"DeliveryStreamArn"`
	IamRoleArn        string `json:"IamRoleArn"`
}
