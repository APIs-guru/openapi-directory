package shared

// EngineDefaults
//
//	Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
type EngineDefaults struct {
	DbParameterGroupFamily *string
	Marker                 *string
	Parameters             []Parameter
}
