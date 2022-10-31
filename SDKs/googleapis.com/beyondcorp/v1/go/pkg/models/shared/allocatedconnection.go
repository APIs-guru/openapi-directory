package shared

type AllocatedConnection struct {
	IngressPort *int32  `json:"ingressPort,omitempty"`
	PscURI      *string `json:"pscUri,omitempty"`
}
