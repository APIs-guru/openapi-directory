package shared

type Channel struct {
	ChannelName       string                 `json:"ChannelName"`
	CompressionType   *CompressionTypeEnum   `json:"CompressionType"`
	ContentType       *string                `json:"ContentType"`
	DataSource        DataSource             `json:"DataSource"`
	InputMode         *TrainingInputModeEnum `json:"InputMode"`
	RecordWrapperType *RecordWrapperEnum     `json:"RecordWrapperType"`
	ShuffleConfig     *ShuffleConfig         `json:"ShuffleConfig"`
}
