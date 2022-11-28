package shared

// Contact
// Contains information on how a buyer or seller can be reached.
type Contact struct {
	DisplayName *string `json:"displayName,omitempty"`
	Email       *string `json:"email,omitempty"`
}
