package shared



type ResourceChangeDetail struct {
    CausingEntity *string `json:"CausingEntity,omitempty"`
    Evaluation *EvaluationTypeEnum `json:"Evaluation,omitempty"`
    Target *ResourceTargetDefinition `json:"Target,omitempty"`
    
}

