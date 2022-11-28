package shared

// NetworkPathComponent
// Information about a network path component.
type NetworkPathComponent struct {
	ComponentID   *string        `json:"ComponentId,omitempty"`
	ComponentType *string        `json:"ComponentType,omitempty"`
	Egress        *NetworkHeader `json:"Egress,omitempty"`
	Ingress       *NetworkHeader `json:"Ingress,omitempty"`
}
