package shared

type NetworkHeader struct {
	Destination *NetworkPathComponentDetails `json:"Destination"`
	Protocol    *string                      `json:"Protocol"`
	Source      *NetworkPathComponentDetails `json:"Source"`
}
