package shared

type NetworkPathComponent struct {
	ComponentID   *string        `json:"ComponentId"`
	ComponentType *string        `json:"ComponentType"`
	Egress        *NetworkHeader `json:"Egress"`
	Ingress       *NetworkHeader `json:"Ingress"`
}
