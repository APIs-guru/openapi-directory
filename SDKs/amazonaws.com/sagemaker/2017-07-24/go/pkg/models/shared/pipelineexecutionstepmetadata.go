package shared

type PipelineExecutionStepMetadata struct {
	Callback      *CallbackStepMetadata      `json:"Callback"`
	Condition     *ConditionStepMetadata     `json:"Condition"`
	Lambda        *LambdaStepMetadata        `json:"Lambda"`
	Model         *ModelStepMetadata         `json:"Model"`
	ProcessingJob *ProcessingJobStepMetadata `json:"ProcessingJob"`
	RegisterModel *RegisterModelStepMetadata `json:"RegisterModel"`
	TrainingJob   *TrainingJobStepMetadata   `json:"TrainingJob"`
	TransformJob  *TransformJobStepMetadata  `json:"TransformJob"`
	TuningJob     *TuningJobStepMetaData     `json:"TuningJob"`
}
