package shared

type IngressPolicy struct {
	IngressFrom *IngressFrom `json:"ingressFrom"`
	IngressTo   *IngressTo   `json:"ingressTo"`
}
