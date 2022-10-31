package shared

type KinesisFirehoseDestination struct {
	DeliveryStreamArn string `json:"DeliveryStreamArn"`
	IamRoleArn        string `json:"IamRoleArn"`
}
