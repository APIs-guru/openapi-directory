package shared

// OperatingSystemConfigurationManager
// A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.
type OperatingSystemConfigurationManager struct {
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
