package shared

// DeployAsApplicationConfiguration
// The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state..
type DeployAsApplicationConfiguration struct {
	S3ContentLocation S3ContentBaseLocation `json:"S3ContentLocation"`
}
