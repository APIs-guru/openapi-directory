package shared

// ClusterVersionsMessage
// Contains the output from the <a>DescribeClusterVersions</a> action.
type ClusterVersionsMessage struct {
	ClusterVersions []ClusterVersion
	Marker          *string
}
