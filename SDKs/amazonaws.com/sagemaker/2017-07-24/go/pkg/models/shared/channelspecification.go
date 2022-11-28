package shared

// ChannelSpecification
// Defines a named input source, called a channel, to be used by an algorithm.
type ChannelSpecification struct {
	Description               *string                 `json:"Description,omitempty"`
	IsRequired                *bool                   `json:"IsRequired,omitempty"`
	Name                      string                  `json:"Name"`
	SupportedCompressionTypes []CompressionTypeEnum   `json:"SupportedCompressionTypes,omitempty"`
	SupportedContentTypes     []string                `json:"SupportedContentTypes"`
	SupportedInputModes       []TrainingInputModeEnum `json:"SupportedInputModes"`
}
