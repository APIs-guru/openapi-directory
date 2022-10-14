package shared

type NetworkHeader struct {
	Destination *NetworkPathComponentDetails `json:"Destination,omitempty"`
	Protocol    *string                      `json:"Protocol,omitempty"`
	Source      *NetworkPathComponentDetails `json:"Source,omitempty"`
}
