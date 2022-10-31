package shared



type AlgorithmValidationProfile struct {
    ProfileName string `json:"ProfileName"`
    TrainingJobDefinition TrainingJobDefinition `json:"TrainingJobDefinition"`
    TransformJobDefinition *TransformJobDefinition `json:"TransformJobDefinition,omitempty"`
    
}

