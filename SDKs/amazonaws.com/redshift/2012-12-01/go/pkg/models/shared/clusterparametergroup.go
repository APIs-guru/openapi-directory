package shared

// ClusterParameterGroup
// Describes a parameter group.
type ClusterParameterGroup struct {
	Description          *string
	ParameterGroupFamily *string
	ParameterGroupName   *string
	Tags                 []Tag
}
