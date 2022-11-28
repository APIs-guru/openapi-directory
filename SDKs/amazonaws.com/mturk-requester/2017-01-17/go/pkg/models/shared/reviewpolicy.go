package shared

// ReviewPolicy
//
//	HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT.
type ReviewPolicy struct {
	Parameters []PolicyParameter `json:"Parameters,omitempty"`
	PolicyName string            `json:"PolicyName"`
}
