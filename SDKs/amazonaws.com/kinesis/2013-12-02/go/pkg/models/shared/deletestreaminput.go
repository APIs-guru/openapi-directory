package shared

// DeleteStreamInput
// Represents the input for <a>DeleteStream</a>.
type DeleteStreamInput struct {
	EnforceConsumerDeletion *bool  `json:"EnforceConsumerDeletion,omitempty"`
	StreamName              string `json:"StreamName"`
}
