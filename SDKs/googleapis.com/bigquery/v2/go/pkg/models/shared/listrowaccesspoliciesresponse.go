package shared

// ListRowAccessPoliciesResponse
// Response message for the ListRowAccessPolicies method.
type ListRowAccessPoliciesResponse struct {
	NextPageToken     *string           `json:"nextPageToken,omitempty"`
	RowAccessPolicies []RowAccessPolicy `json:"rowAccessPolicies,omitempty"`
}
