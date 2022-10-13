package shared

type InferenceInputConfiguration struct {
	InferenceInputNameConfiguration *InferenceInputNameConfiguration `json:"InferenceInputNameConfiguration"`
	InputTimeZoneOffset             *string                          `json:"InputTimeZoneOffset"`
	S3InputConfiguration            *InferenceS3InputConfiguration   `json:"S3InputConfiguration"`
}
