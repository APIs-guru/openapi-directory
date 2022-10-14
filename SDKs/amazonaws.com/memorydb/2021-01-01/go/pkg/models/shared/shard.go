package shared

type Shard struct {
	Name          *string `json:"Name,omitempty"`
	Nodes         []Node  `json:"Nodes,omitempty"`
	NumberOfNodes *int64  `json:"NumberOfNodes,omitempty"`
	Slots         *string `json:"Slots,omitempty"`
	Status        *string `json:"Status,omitempty"`
}
