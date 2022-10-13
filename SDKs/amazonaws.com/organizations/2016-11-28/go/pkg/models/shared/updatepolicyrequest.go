package shared

type UpdatePolicyRequest struct {
	Content     *string `json:"Content"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
	PolicyID    string  `json:"PolicyId"`
}
