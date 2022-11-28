package shared

// AwsEcsTaskDefinitionPlacementConstraintsDetails
// A placement constraint object to use for tasks.
type AwsEcsTaskDefinitionPlacementConstraintsDetails struct {
	Expression *string `json:"Expression,omitempty"`
	Type       *string `json:"Type,omitempty"`
}
