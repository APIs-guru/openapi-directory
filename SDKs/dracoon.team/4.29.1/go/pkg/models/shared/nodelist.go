package shared

type NodeList struct {
	Items []Node `json:"items"`
	Range Range  `json:"range"`
}
