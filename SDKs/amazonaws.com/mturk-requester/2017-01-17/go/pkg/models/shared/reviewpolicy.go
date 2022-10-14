package shared

type ReviewPolicy struct {
	Parameters []PolicyParameter `json:"Parameters,omitempty"`
	PolicyName string            `json:"PolicyName"`
}
