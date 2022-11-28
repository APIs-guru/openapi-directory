package shared

type DbClusterEndpointMessage struct {
	DbClusterEndpoints []DbClusterEndpoint
	Marker             *string
}
