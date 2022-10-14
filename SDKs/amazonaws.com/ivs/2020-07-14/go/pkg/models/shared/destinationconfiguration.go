package shared

type DestinationConfiguration struct {
	S3 *S3DestinationConfiguration `json:"s3,omitempty"`
}
