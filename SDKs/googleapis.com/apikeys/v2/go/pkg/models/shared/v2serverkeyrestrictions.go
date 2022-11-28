package shared

// V2ServerKeyRestrictions
// The IP addresses of callers that are allowed to use the key.
type V2ServerKeyRestrictions struct {
	AllowedIps []string `json:"allowedIps,omitempty"`
}
