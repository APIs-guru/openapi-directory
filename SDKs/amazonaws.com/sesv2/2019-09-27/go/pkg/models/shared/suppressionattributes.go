package shared

// SuppressionAttributes
// An object that contains information about the email address suppression preferences for your account in the current AWS Region.
type SuppressionAttributes struct {
	SuppressedReasons []SuppressionListReasonEnum `json:"SuppressedReasons,omitempty"`
}
