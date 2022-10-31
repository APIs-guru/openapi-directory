package shared



type Container struct {
    Command []string `json:"command,omitempty"`
    Environment map[string]string `json:"environment,omitempty"`
    Image *string `json:"image,omitempty"`
    Ports map[string]ContainerServiceProtocolEnum `json:"ports,omitempty"`
    
}

