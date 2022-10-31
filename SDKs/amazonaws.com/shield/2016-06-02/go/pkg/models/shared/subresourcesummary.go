package shared



type SubResourceSummary struct {
    AttackVectors []SummarizedAttackVector `json:"AttackVectors,omitempty"`
    Counters []SummarizedCounter `json:"Counters,omitempty"`
    ID *string `json:"Id,omitempty"`
    Type *SubResourceTypeEnum `json:"Type,omitempty"`
    
}

