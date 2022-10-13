package shared

type SolutionConfig struct {
	AlgorithmHyperParameters        map[string]string      `json:"algorithmHyperParameters"`
	AutoMlConfig                    *AutoMlConfig          `json:"autoMLConfig"`
	EventValueThreshold             *string                `json:"eventValueThreshold"`
	FeatureTransformationParameters map[string]string      `json:"featureTransformationParameters"`
	HpoConfig                       *HpoConfig             `json:"hpoConfig"`
	OptimizationObjective           *OptimizationObjective `json:"optimizationObjective"`
}
