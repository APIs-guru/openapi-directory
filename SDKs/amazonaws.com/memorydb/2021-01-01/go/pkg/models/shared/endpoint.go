package shared

// Endpoint
// Represents the information required for client programs to connect to the cluster and its nodes.
type Endpoint struct {
	Address *string `json:"Address,omitempty"`
	Port    *int64  `json:"Port,omitempty"`
}
