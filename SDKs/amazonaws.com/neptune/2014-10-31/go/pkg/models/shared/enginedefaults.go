package shared

// EngineDefaults
//
//	Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.
type EngineDefaults struct {
	DbParameterGroupFamily *string
	Marker                 *string
	Parameters             []Parameter
}
