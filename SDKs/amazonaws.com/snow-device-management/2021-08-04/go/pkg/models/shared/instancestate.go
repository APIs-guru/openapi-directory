package shared

// InstanceState
// The description of the current state of an instance.
type InstanceState struct {
	Code *int64                 `json:"code,omitempty"`
	Name *InstanceStateNameEnum `json:"name,omitempty"`
}
