package shared

// AlgorithmValidationProfile
// <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.</p>
type AlgorithmValidationProfile struct {
	ProfileName            string                  `json:"ProfileName"`
	TrainingJobDefinition  TrainingJobDefinition   `json:"TrainingJobDefinition"`
	TransformJobDefinition *TransformJobDefinition `json:"TransformJobDefinition,omitempty"`
}
