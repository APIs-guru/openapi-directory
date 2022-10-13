package shared

type ReviewPolicy struct {
	Parameters []PolicyParameter `json:"Parameters"`
	PolicyName string            `json:"PolicyName"`
}
