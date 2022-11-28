package shared

// SuppressionOptions
// An object that contains information about the suppression list preferences for your account.
type SuppressionOptions struct {
	SuppressedReasons []SuppressionListReasonEnum `json:"SuppressedReasons,omitempty"`
}
