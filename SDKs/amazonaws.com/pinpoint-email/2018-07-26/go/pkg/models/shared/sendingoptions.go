package shared

// SendingOptions
// Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
type SendingOptions struct {
	SendingEnabled *bool `json:"SendingEnabled,omitempty"`
}
