package shared

type CreateAlgorithmInput struct {
	AlgorithmDescription    *string                           `json:"AlgorithmDescription"`
	AlgorithmName           string                            `json:"AlgorithmName"`
	CertifyForMarketplace   *bool                             `json:"CertifyForMarketplace"`
	InferenceSpecification  *InferenceSpecification           `json:"InferenceSpecification"`
	Tags                    []Tag                             `json:"Tags"`
	TrainingSpecification   TrainingSpecification             `json:"TrainingSpecification"`
	ValidationSpecification *AlgorithmValidationSpecification `json:"ValidationSpecification"`
}
