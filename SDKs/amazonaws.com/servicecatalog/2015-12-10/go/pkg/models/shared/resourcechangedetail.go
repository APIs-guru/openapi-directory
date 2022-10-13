package shared

type ResourceChangeDetail struct {
	CausingEntity *string                   `json:"CausingEntity"`
	Evaluation    *EvaluationTypeEnum       `json:"Evaluation"`
	Target        *ResourceTargetDefinition `json:"Target"`
}
