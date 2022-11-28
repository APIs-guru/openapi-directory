package shared

// EmailPreferences
// Represents preferences for sending email notifications for transfer run events.
type EmailPreferences struct {
	EnableFailureEmail *bool `json:"enableFailureEmail,omitempty"`
}
