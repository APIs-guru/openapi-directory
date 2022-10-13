package shared

type SubResourceSummary struct {
	AttackVectors []SummarizedAttackVector `json:"AttackVectors"`
	Counters      []SummarizedCounter      `json:"Counters"`
	ID            *string                  `json:"Id"`
	Type          *SubResourceTypeEnum     `json:"Type"`
}
