package shared

// ClusterNode
// The identifier of a node in a cluster.
type ClusterNode struct {
	NodeRole         *string
	PrivateIPAddress *string
	PublicIPAddress  *string
}
