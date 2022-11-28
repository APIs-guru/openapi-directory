package shared

// AlgorithmSpecification
// <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
type AlgorithmSpecification struct {
	AlgorithmName                    *string               `json:"AlgorithmName,omitempty"`
	EnableSageMakerMetricsTimeSeries *bool                 `json:"EnableSageMakerMetricsTimeSeries,omitempty"`
	MetricDefinitions                []MetricDefinition    `json:"MetricDefinitions,omitempty"`
	TrainingImage                    *string               `json:"TrainingImage,omitempty"`
	TrainingInputMode                TrainingInputModeEnum `json:"TrainingInputMode"`
}
