package shared

// Channel
// A channel is a named input source that training algorithms can consume.
type Channel struct {
	ChannelName       string                 `json:"ChannelName"`
	CompressionType   *CompressionTypeEnum   `json:"CompressionType,omitempty"`
	ContentType       *string                `json:"ContentType,omitempty"`
	DataSource        DataSource             `json:"DataSource"`
	InputMode         *TrainingInputModeEnum `json:"InputMode,omitempty"`
	RecordWrapperType *RecordWrapperEnum     `json:"RecordWrapperType,omitempty"`
	ShuffleConfig     *ShuffleConfig         `json:"ShuffleConfig,omitempty"`
}
