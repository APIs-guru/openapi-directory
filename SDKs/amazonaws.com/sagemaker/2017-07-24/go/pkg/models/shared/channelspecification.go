package shared

type ChannelSpecification struct {
	Description               *string                 `json:"Description"`
	IsRequired                *bool                   `json:"IsRequired"`
	Name                      string                  `json:"Name"`
	SupportedCompressionTypes []CompressionTypeEnum   `json:"SupportedCompressionTypes"`
	SupportedContentTypes     []string                `json:"SupportedContentTypes"`
	SupportedInputModes       []TrainingInputModeEnum `json:"SupportedInputModes"`
}
