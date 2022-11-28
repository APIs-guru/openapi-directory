package shared

// StreamConfiguration
// A configuration for a streaming session.
type StreamConfiguration struct {
	ClipboardMode             *StreamingClipboardModeEnum `json:"clipboardMode,omitempty"`
	Ec2InstanceTypes          []StreamingInstanceTypeEnum `json:"ec2InstanceTypes,omitempty"`
	MaxSessionLengthInMinutes *int64                      `json:"maxSessionLengthInMinutes,omitempty"`
	StreamingImageIds         []string                    `json:"streamingImageIds,omitempty"`
}
