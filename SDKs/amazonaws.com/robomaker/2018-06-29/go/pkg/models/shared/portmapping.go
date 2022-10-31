package shared



type PortMapping struct {
    ApplicationPort int64 `json:"applicationPort"`
    EnableOnPublicIP *bool `json:"enableOnPublicIp,omitempty"`
    JobPort int64 `json:"jobPort"`
    
}

