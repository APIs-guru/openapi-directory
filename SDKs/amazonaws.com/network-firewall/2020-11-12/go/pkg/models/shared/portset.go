package shared

// PortSet
// A set of port ranges for use in the rules in a rule group.
type PortSet struct {
	Definition []string `json:"Definition,omitempty"`
}
