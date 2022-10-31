package shared



type CreateAlgorithmInput struct {
    AlgorithmDescription *string `json:"AlgorithmDescription,omitempty"`
    AlgorithmName string `json:"AlgorithmName"`
    CertifyForMarketplace *bool `json:"CertifyForMarketplace,omitempty"`
    InferenceSpecification *InferenceSpecification `json:"InferenceSpecification,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TrainingSpecification TrainingSpecification `json:"TrainingSpecification"`
    ValidationSpecification *AlgorithmValidationSpecification `json:"ValidationSpecification,omitempty"`
    
}

