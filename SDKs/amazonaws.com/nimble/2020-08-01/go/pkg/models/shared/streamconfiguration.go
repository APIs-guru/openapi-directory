package shared

type StreamConfiguration struct {
	ClipboardMode             *StreamingClipboardModeEnum `json:"clipboardMode,omitempty"`
	Ec2InstanceTypes          []StreamingInstanceTypeEnum `json:"ec2InstanceTypes,omitempty"`
	MaxSessionLengthInMinutes *int64                      `json:"maxSessionLengthInMinutes,omitempty"`
	StreamingImageIds         []string                    `json:"streamingImageIds,omitempty"`
}
