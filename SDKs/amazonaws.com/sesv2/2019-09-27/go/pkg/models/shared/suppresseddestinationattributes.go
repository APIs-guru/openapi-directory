package shared

type SuppressedDestinationAttributes struct {
	FeedbackID *string `json:"FeedbackId,omitempty"`
	MessageID  *string `json:"MessageId,omitempty"`
}
