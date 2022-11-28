package shared

// InsightImpactGraphService
// Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
type InsightImpactGraphService struct {
	AccountID   *string                  `json:"AccountId,omitempty"`
	Edges       []InsightImpactGraphEdge `json:"Edges,omitempty"`
	Name        *string                  `json:"Name,omitempty"`
	Names       []string                 `json:"Names,omitempty"`
	ReferenceID *int64                   `json:"ReferenceId,omitempty"`
	Type        *string                  `json:"Type,omitempty"`
}
