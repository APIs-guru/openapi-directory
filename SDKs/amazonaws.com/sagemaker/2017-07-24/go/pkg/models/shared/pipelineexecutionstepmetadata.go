package shared

type PipelineExecutionStepMetadata struct {
	Callback      *CallbackStepMetadata      `json:"Callback,omitempty"`
	Condition     *ConditionStepMetadata     `json:"Condition,omitempty"`
	Lambda        *LambdaStepMetadata        `json:"Lambda,omitempty"`
	Model         *ModelStepMetadata         `json:"Model,omitempty"`
	ProcessingJob *ProcessingJobStepMetadata `json:"ProcessingJob,omitempty"`
	RegisterModel *RegisterModelStepMetadata `json:"RegisterModel,omitempty"`
	TrainingJob   *TrainingJobStepMetadata   `json:"TrainingJob,omitempty"`
	TransformJob  *TransformJobStepMetadata  `json:"TransformJob,omitempty"`
	TuningJob     *TuningJobStepMetaData     `json:"TuningJob,omitempty"`
}
