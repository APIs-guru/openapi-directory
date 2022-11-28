package shared

// InstanceState
// Describes the virtual private server (or <i>instance</i>) status.
type InstanceState struct {
	Code *int64  `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}
