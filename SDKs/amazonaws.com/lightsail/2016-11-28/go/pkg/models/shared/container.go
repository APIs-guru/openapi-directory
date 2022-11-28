package shared

// Container
// Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
type Container struct {
	Command     []string                                `json:"command,omitempty"`
	Environment map[string]string                       `json:"environment,omitempty"`
	Image       *string                                 `json:"image,omitempty"`
	Ports       map[string]ContainerServiceProtocolEnum `json:"ports,omitempty"`
}
