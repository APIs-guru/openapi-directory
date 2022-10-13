package shared

type ListKeyPoliciesResponse struct {
	NextMarker  *string  `json:"NextMarker"`
	PolicyNames []string `json:"PolicyNames"`
	Truncated   *bool    `json:"Truncated"`
}
