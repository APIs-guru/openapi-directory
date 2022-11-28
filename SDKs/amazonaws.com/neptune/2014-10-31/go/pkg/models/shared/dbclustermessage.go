package shared

type DbClusterMessage struct {
	DbClusters []DbCluster
	Marker     *string
}
