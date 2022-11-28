package shared

// SummarizedAttackVector
// A summary of information about the attack.
type SummarizedAttackVector struct {
	VectorCounters []SummarizedCounter `json:"VectorCounters,omitempty"`
	VectorType     string              `json:"VectorType"`
}
