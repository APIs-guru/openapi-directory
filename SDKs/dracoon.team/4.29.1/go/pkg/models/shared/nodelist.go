package shared

// NodeList
// List of nodes
type NodeList struct {
	Items []Node `json:"items"`
	Range Range  `json:"range"`
}
