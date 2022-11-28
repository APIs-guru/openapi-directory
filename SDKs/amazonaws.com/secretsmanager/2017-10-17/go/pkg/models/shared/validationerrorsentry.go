package shared

// ValidationErrorsEntry
// Displays errors that occurred during validation of the resource policy.
type ValidationErrorsEntry struct {
	CheckName    *string `json:"CheckName,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
}
