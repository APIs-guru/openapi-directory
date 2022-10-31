package shared



type SummarizedAttackVector struct {
    VectorCounters []SummarizedCounter `json:"VectorCounters,omitempty"`
    VectorType string `json:"VectorType"`
    
}

