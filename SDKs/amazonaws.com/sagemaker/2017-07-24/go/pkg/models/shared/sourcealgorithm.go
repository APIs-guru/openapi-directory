package shared

// SourceAlgorithm
// Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.
type SourceAlgorithm struct {
	AlgorithmName string  `json:"AlgorithmName"`
	ModelDataURL  *string `json:"ModelDataUrl,omitempty"`
}
