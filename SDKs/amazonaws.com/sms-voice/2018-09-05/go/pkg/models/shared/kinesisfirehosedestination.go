package shared

// KinesisFirehoseDestination
// An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
type KinesisFirehoseDestination struct {
	DeliveryStreamArn *string `json:"DeliveryStreamArn,omitempty"`
	IamRoleArn        *string `json:"IamRoleArn,omitempty"`
}
