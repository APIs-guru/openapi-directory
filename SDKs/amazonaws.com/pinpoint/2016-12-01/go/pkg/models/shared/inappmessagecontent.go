package shared

// InAppMessageContent
// The configuration for the message content.
type InAppMessageContent struct {
	BackgroundColor *string                   `json:"BackgroundColor,omitempty"`
	BodyConfig      *InAppMessageBodyConfig   `json:"BodyConfig,omitempty"`
	HeaderConfig    *InAppMessageHeaderConfig `json:"HeaderConfig,omitempty"`
	ImageURL        *string                   `json:"ImageUrl,omitempty"`
	PrimaryBtn      *InAppMessageButton       `json:"PrimaryBtn,omitempty"`
	SecondaryBtn    *InAppMessageButton       `json:"SecondaryBtn,omitempty"`
}
