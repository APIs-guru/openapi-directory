package shared

type ListKeyPoliciesResponse struct {
	NextMarker  *string  `json:"NextMarker,omitempty"`
	PolicyNames []string `json:"PolicyNames,omitempty"`
	Truncated   *bool    `json:"Truncated,omitempty"`
}
