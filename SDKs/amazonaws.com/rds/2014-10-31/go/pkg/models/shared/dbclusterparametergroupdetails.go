package shared

// DbClusterParameterGroupDetails
// Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
type DbClusterParameterGroupDetails struct {
	Marker     *string
	Parameters []Parameter
}
