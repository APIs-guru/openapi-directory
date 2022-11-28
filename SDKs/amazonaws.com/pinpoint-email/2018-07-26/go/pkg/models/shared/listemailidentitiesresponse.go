package shared

// ListEmailIdentitiesResponse
// A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.
type ListEmailIdentitiesResponse struct {
	EmailIdentities []IdentityInfo `json:"EmailIdentities,omitempty"`
	NextToken       *string        `json:"NextToken,omitempty"`
}
