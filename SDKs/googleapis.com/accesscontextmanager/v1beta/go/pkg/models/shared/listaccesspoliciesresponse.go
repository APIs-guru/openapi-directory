package shared

type ListAccessPoliciesResponse struct {
	AccessPolicies []AccessPolicy `json:"accessPolicies"`
	NextPageToken  *string        `json:"nextPageToken"`
}
