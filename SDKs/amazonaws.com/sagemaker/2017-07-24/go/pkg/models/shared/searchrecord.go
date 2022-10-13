package shared

type SearchRecord struct {
	Endpoint          *Endpoint          `json:"Endpoint"`
	Experiment        *Experiment        `json:"Experiment"`
	FeatureGroup      *FeatureGroup      `json:"FeatureGroup"`
	ModelPackage      *ModelPackage      `json:"ModelPackage"`
	ModelPackageGroup *ModelPackageGroup `json:"ModelPackageGroup"`
	Pipeline          *Pipeline          `json:"Pipeline"`
	PipelineExecution *PipelineExecution `json:"PipelineExecution"`
	Project           *Project           `json:"Project"`
	TrainingJob       *TrainingJob       `json:"TrainingJob"`
	Trial             *Trial             `json:"Trial"`
	TrialComponent    *TrialComponent    `json:"TrialComponent"`
}
