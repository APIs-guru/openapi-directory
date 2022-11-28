package shared

// FeatureSettings
// The feature specific settings to be used in the application. These define behaviors that are user configurable.
type FeatureSettings struct {
	SplitHealthChecks       *bool `json:"splitHealthChecks,omitempty"`
	UseContainerOptimizedOs *bool `json:"useContainerOptimizedOs,omitempty"`
}
