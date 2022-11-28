package shared

// GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter
// Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.
type GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter struct {
	ScorePath *string `json:"scorePath,omitempty"`
}
