package shared

// ContactInformation
// Contains information on how a buyer or seller can be reached.
type ContactInformation struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}
