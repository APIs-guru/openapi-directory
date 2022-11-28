package shared

// AllocatedConnection
// Allocated connection of the AppGateway.
type AllocatedConnection struct {
	IngressPort *int32  `json:"ingressPort,omitempty"`
	PscURI      *string `json:"pscUri,omitempty"`
}
