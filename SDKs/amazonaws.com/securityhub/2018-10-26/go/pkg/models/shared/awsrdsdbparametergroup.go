package shared

// AwsRdsDbParameterGroup
// Provides information about a parameter group for a DB instance.
type AwsRdsDbParameterGroup struct {
	DbParameterGroupName *string `json:"DbParameterGroupName,omitempty"`
	ParameterApplyStatus *string `json:"ParameterApplyStatus,omitempty"`
}
