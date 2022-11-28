package shared

// InstanceIDDetail
// A list of EC2 instance IDs corresponding to the segments in a trace.
type InstanceIDDetail struct {
	ID *string `json:"Id,omitempty"`
}
