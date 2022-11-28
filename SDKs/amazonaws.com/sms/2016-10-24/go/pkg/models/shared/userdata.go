package shared

// UserData
// A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.
type UserData struct {
	S3Location *S3Location `json:"s3Location,omitempty"`
}
