package shared

type StreamConfiguration struct {
	ClipboardMode             *StreamingClipboardModeEnum `json:"clipboardMode"`
	Ec2InstanceTypes          []StreamingInstanceTypeEnum `json:"ec2InstanceTypes"`
	MaxSessionLengthInMinutes *int64                      `json:"maxSessionLengthInMinutes"`
	StreamingImageIds         []string                    `json:"streamingImageIds"`
}
