package shared

// RawEmail
// Specifies the contents of an email message, represented as a raw MIME message.
type RawEmail struct {
	Data *string `json:"Data,omitempty"`
}
