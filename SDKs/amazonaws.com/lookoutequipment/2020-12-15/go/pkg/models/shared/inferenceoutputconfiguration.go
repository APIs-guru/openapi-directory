package shared

// InferenceOutputConfiguration
//
//	Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location.
type InferenceOutputConfiguration struct {
	KmsKeyID              *string                        `json:"KmsKeyId,omitempty"`
	S3OutputConfiguration InferenceS3OutputConfiguration `json:"S3OutputConfiguration"`
}
