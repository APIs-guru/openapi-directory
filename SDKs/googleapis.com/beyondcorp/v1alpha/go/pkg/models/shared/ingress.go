package shared

// Ingress
// Settings of how to connect to the ClientGateway. One of the following options should be set.
type Ingress struct {
	Config *Config `json:"config,omitempty"`
}
