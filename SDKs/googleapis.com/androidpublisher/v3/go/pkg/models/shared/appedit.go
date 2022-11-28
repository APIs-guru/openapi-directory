package shared

// AppEdit
// An app edit. The resource for EditsService.
type AppEdit struct {
	ExpiryTimeSeconds *string `json:"expiryTimeSeconds,omitempty"`
	ID                *string `json:"id,omitempty"`
}
