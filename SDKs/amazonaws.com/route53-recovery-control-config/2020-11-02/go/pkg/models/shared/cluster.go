package shared

type Cluster struct {
	ClusterArn       *string           `json:"ClusterArn"`
	ClusterEndpoints []ClusterEndpoint `json:"ClusterEndpoints"`
	Name             *string           `json:"Name"`
	Status           *StatusEnum       `json:"Status"`
}
