package shared

type ClusterEndpoint struct {
	Endpoint *string `json:"Endpoint,omitempty"`
	Region   *string `json:"Region,omitempty"`
}
