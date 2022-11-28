package shared

// ClusterEndpoint
// A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.
type ClusterEndpoint struct {
	Endpoint *string `json:"Endpoint,omitempty"`
	Region   *string `json:"Region,omitempty"`
}
