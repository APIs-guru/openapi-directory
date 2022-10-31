package shared

type KinesisFirehoseDestination struct {
	DeliveryStreamArn *string `json:"DeliveryStreamArn,omitempty"`
	IamRoleArn        *string `json:"IamRoleArn,omitempty"`
}
