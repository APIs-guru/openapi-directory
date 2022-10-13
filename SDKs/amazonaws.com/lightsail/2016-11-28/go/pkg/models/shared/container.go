package shared

type Container struct {
	Command     []string                                `json:"command"`
	Environment map[string]string                       `json:"environment"`
	Image       *string                                 `json:"image"`
	Ports       map[string]ContainerServiceProtocolEnum `json:"ports"`
}
