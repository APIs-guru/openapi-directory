package shared

// Issuer
// Details about the issuer of a license.
type Issuer struct {
	Name    string  `json:"Name"`
	SignKey *string `json:"SignKey,omitempty"`
}
