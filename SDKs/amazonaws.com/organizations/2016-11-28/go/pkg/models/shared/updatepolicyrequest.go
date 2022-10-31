package shared

type UpdatePolicyRequest struct {
	Content     *string `json:"Content,omitempty"`
	Description *string `json:"Description,omitempty"`
	Name        *string `json:"Name,omitempty"`
	PolicyID    string  `json:"PolicyId"`
}
