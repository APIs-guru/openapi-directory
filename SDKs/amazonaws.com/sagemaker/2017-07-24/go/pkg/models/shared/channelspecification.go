package shared

type ChannelSpecification struct {
	Description               *string                 `json:"Description,omitempty"`
	IsRequired                *bool                   `json:"IsRequired,omitempty"`
	Name                      string                  `json:"Name"`
	SupportedCompressionTypes []CompressionTypeEnum   `json:"SupportedCompressionTypes,omitempty"`
	SupportedContentTypes     []string                `json:"SupportedContentTypes"`
	SupportedInputModes       []TrainingInputModeEnum `json:"SupportedInputModes"`
}
