package shared

// DkimAttributes
// An object that contains information about the DKIM configuration for an email identity.
type DkimAttributes struct {
	SigningEnabled *bool           `json:"SigningEnabled,omitempty"`
	Status         *DkimStatusEnum `json:"Status,omitempty"`
	Tokens         []string        `json:"Tokens,omitempty"`
}
