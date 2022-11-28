package shared

// ClusterParameterGroupDetails
// Contains the output from the <a>DescribeClusterParameters</a> action.
type ClusterParameterGroupDetails struct {
	Marker     *string
	Parameters []Parameter
}
