package shared

// InstancePolicyOrTemplate
// Either an InstancePolicy or an instance template.
type InstancePolicyOrTemplate struct {
	InstallGpuDrivers *bool           `json:"installGpuDrivers,omitempty"`
	InstanceTemplate  *string         `json:"instanceTemplate,omitempty"`
	Policy            *InstancePolicy `json:"policy,omitempty"`
}
