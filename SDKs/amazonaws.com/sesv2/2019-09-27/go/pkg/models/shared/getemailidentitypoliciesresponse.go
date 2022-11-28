package shared

// GetEmailIdentityPoliciesResponse
// Identity policies associated with email identity.
type GetEmailIdentityPoliciesResponse struct {
	Policies map[string]string `json:"Policies,omitempty"`
}
