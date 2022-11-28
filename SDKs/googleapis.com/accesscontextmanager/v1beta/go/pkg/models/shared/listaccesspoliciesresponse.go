package shared

// ListAccessPoliciesResponse
// A response to `ListAccessPoliciesRequest`.
type ListAccessPoliciesResponse struct {
	AccessPolicies []AccessPolicy `json:"accessPolicies,omitempty"`
	NextPageToken  *string        `json:"nextPageToken,omitempty"`
}
