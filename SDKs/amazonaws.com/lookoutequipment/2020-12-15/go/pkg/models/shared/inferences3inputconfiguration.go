package shared

// InferenceS3InputConfiguration
//
//	Specifies configuration information for the input data for the inference, including input data S3 location.
type InferenceS3InputConfiguration struct {
	Bucket string  `json:"Bucket"`
	Prefix *string `json:"Prefix,omitempty"`
}
