package shared

// ResizeClusterMessage
// Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation.
type ResizeClusterMessage struct {
	Classic           *bool
	ClusterIdentifier string
	ClusterType       *string
	NodeType          *string
	NumberOfNodes     *int64
}
