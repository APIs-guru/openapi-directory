package shared

// NetworkHeader
// Details about a network path component that occurs before or after the current component.
type NetworkHeader struct {
	Destination *NetworkPathComponentDetails `json:"Destination,omitempty"`
	Protocol    *string                      `json:"Protocol,omitempty"`
	Source      *NetworkPathComponentDetails `json:"Source,omitempty"`
}
