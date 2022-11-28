package shared

// CacheHitResult
// Details on the cache hit of a pipeline execution step.
type CacheHitResult struct {
	SourcePipelineExecutionArn *string `json:"SourcePipelineExecutionArn,omitempty"`
}
