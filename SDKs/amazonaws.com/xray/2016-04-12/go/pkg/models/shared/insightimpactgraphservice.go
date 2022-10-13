package shared

type InsightImpactGraphService struct {
	AccountID   *string                  `json:"AccountId"`
	Edges       []InsightImpactGraphEdge `json:"Edges"`
	Name        *string                  `json:"Name"`
	Names       []string                 `json:"Names"`
	ReferenceID *int64                   `json:"ReferenceId"`
	Type        *string                  `json:"Type"`
}
