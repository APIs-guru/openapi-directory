package shared

// InferenceS3OutputConfiguration
//
//	Specifies configuration information for the output results from the inference, including output S3 location.
type InferenceS3OutputConfiguration struct {
	Bucket string  `json:"Bucket"`
	Prefix *string `json:"Prefix,omitempty"`
}
