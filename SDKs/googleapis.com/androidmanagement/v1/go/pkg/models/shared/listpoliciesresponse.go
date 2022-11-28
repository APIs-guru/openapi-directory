package shared

// ListPoliciesResponse
// Response to a request to list policies for a given enterprise.
type ListPoliciesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Policies      []Policy `json:"policies,omitempty"`
}
