package shared

// DefaultClusterParameters
// Describes the default cluster parameters for a parameter group family.
type DefaultClusterParameters struct {
	Marker               *string
	ParameterGroupFamily *string
	Parameters           []Parameter
}
