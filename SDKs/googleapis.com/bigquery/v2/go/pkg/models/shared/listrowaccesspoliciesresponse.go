package shared

type ListRowAccessPoliciesResponse struct {
	NextPageToken     *string           `json:"nextPageToken"`
	RowAccessPolicies []RowAccessPolicy `json:"rowAccessPolicies"`
}
