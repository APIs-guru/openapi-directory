package shared

// InferenceInputNameConfiguration
// Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
type InferenceInputNameConfiguration struct {
	ComponentTimestampDelimiter *string `json:"ComponentTimestampDelimiter,omitempty"`
	TimestampFormat             *string `json:"TimestampFormat,omitempty"`
}
