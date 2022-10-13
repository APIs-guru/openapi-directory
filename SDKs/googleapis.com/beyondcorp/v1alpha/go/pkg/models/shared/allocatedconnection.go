package shared

type AllocatedConnection struct {
	IngressPort *int32  `json:"ingressPort"`
	PscURI      *string `json:"pscUri"`
}
