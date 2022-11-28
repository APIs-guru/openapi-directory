package shared

// AlgorithmValidationSpecification
// Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.
type AlgorithmValidationSpecification struct {
	ValidationProfiles []AlgorithmValidationProfile `json:"ValidationProfiles"`
	ValidationRole     string                       `json:"ValidationRole"`
}
