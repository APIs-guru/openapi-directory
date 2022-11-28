package shared

// HashClientIDRequest
// JSON template for a hash Client Id request resource.
type HashClientIDRequest struct {
	ClientID      *string `json:"clientId,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	WebPropertyID *string `json:"webPropertyId,omitempty"`
}
