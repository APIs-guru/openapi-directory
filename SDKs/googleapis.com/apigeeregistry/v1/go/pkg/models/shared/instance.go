package shared

// InstanceInput
// An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
type InstanceInput struct {
	Config *ConfigInput `json:"config,omitempty"`
	Name   *string      `json:"name,omitempty"`
}
