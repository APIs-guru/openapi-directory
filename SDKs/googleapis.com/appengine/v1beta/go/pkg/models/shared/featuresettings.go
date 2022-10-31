package shared



type FeatureSettings struct {
    SplitHealthChecks *bool `json:"splitHealthChecks,omitempty"`
    UseContainerOptimizedOs *bool `json:"useContainerOptimizedOs,omitempty"`
    
}

