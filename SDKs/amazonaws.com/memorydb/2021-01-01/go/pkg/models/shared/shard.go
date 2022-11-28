package shared

// Shard
// Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
type Shard struct {
	Name          *string `json:"Name,omitempty"`
	Nodes         []Node  `json:"Nodes,omitempty"`
	NumberOfNodes *int64  `json:"NumberOfNodes,omitempty"`
	Slots         *string `json:"Slots,omitempty"`
	Status        *string `json:"Status,omitempty"`
}
