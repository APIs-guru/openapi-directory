package shared

// ResourceChangeDetail
// Information about a change to a resource attribute.
type ResourceChangeDetail struct {
	CausingEntity *string                   `json:"CausingEntity,omitempty"`
	Evaluation    *EvaluationTypeEnum       `json:"Evaluation,omitempty"`
	Target        *ResourceTargetDefinition `json:"Target,omitempty"`
}
