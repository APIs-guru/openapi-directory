package shared

// InferenceInputConfiguration
// Specifies configuration information for the input data for the inference, including S3 location of input data..
type InferenceInputConfiguration struct {
	InferenceInputNameConfiguration *InferenceInputNameConfiguration `json:"InferenceInputNameConfiguration,omitempty"`
	InputTimeZoneOffset             *string                          `json:"InputTimeZoneOffset,omitempty"`
	S3InputConfiguration            *InferenceS3InputConfiguration   `json:"S3InputConfiguration,omitempty"`
}
