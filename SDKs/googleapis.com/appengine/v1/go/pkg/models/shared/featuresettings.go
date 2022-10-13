package shared

type FeatureSettings struct {
	SplitHealthChecks       *bool `json:"splitHealthChecks"`
	UseContainerOptimizedOs *bool `json:"useContainerOptimizedOs"`
}
