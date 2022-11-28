package shared

// Destination
// An object that describes the recipients for an email.
type Destination struct {
	BccAddresses []string `json:"BccAddresses,omitempty"`
	CcAddresses  []string `json:"CcAddresses,omitempty"`
	ToAddresses  []string `json:"ToAddresses,omitempty"`
}
