package shared

// ClusterVersion
// Describes a cluster version, including the parameter group family and description of the version.
type ClusterVersion struct {
	ClusterParameterGroupFamily *string
	ClusterVersion              *string
	Description                 *string
}
