package shared

type SummarizedAttackVector struct {
	VectorCounters []SummarizedCounter `json:"VectorCounters"`
	VectorType     string              `json:"VectorType"`
}
