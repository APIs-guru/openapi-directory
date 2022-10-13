package shared

type BatchUpdateClusterResponse struct {
	ProcessedClusters   []Cluster            `json:"ProcessedClusters"`
	UnprocessedClusters []UnprocessedCluster `json:"UnprocessedClusters"`
}
