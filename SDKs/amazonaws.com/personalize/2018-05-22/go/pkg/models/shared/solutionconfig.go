package shared

// SolutionConfig
// Describes the configuration properties for the solution.
type SolutionConfig struct {
	AlgorithmHyperParameters        map[string]string      `json:"algorithmHyperParameters,omitempty"`
	AutoMlConfig                    *AutoMlConfig          `json:"autoMLConfig,omitempty"`
	EventValueThreshold             *string                `json:"eventValueThreshold,omitempty"`
	FeatureTransformationParameters map[string]string      `json:"featureTransformationParameters,omitempty"`
	HpoConfig                       *HpoConfig             `json:"hpoConfig,omitempty"`
	OptimizationObjective           *OptimizationObjective `json:"optimizationObjective,omitempty"`
}
