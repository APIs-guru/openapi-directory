package shared

type IngressPolicy struct {
	IngressFrom *IngressFrom `json:"ingressFrom,omitempty"`
	IngressTo   *IngressTo   `json:"ingressTo,omitempty"`
}
