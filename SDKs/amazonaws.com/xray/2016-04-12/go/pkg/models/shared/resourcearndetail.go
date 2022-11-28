package shared

// ResourceArnDetail
// A list of resources ARNs corresponding to the segments in a trace.
type ResourceArnDetail struct {
	Arn *string `json:"ARN,omitempty"`
}
