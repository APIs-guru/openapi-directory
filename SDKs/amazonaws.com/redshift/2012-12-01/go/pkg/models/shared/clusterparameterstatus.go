package shared

// ClusterParameterStatus
// Describes the status of a parameter group.
type ClusterParameterStatus struct {
	ParameterApplyErrorDescription *string
	ParameterApplyStatus           *string
	ParameterName                  *string
}
