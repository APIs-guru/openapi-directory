package shared

type ListPoliciesResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Policies      []Policy `json:"policies"`
}
