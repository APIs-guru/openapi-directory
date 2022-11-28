package shared

// CheckValidCredsResponse
// A response indicating whether the credentials exist and are valid.
type CheckValidCredsResponse struct {
	HasValidCreds *bool `json:"hasValidCreds,omitempty"`
}
