package shared

// Cluster
// A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.
type Cluster struct {
	ClusterArn       *string           `json:"ClusterArn,omitempty"`
	ClusterEndpoints []ClusterEndpoint `json:"ClusterEndpoints,omitempty"`
	Name             *string           `json:"Name,omitempty"`
	Status           *StatusEnum       `json:"Status,omitempty"`
}
