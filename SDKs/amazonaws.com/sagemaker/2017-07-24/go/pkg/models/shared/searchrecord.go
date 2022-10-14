package shared

type SearchRecord struct {
	Endpoint          *Endpoint          `json:"Endpoint,omitempty"`
	Experiment        *Experiment        `json:"Experiment,omitempty"`
	FeatureGroup      *FeatureGroup      `json:"FeatureGroup,omitempty"`
	ModelPackage      *ModelPackage      `json:"ModelPackage,omitempty"`
	ModelPackageGroup *ModelPackageGroup `json:"ModelPackageGroup,omitempty"`
	Pipeline          *Pipeline          `json:"Pipeline,omitempty"`
	PipelineExecution *PipelineExecution `json:"PipelineExecution,omitempty"`
	Project           *Project           `json:"Project,omitempty"`
	TrainingJob       *TrainingJob       `json:"TrainingJob,omitempty"`
	Trial             *Trial             `json:"Trial,omitempty"`
	TrialComponent    *TrialComponent    `json:"TrialComponent,omitempty"`
}
