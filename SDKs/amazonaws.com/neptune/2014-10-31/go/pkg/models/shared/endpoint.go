package shared

// Endpoint
// <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
type Endpoint struct {
	Address      *string
	HostedZoneID *string
	Port         *int64
}
