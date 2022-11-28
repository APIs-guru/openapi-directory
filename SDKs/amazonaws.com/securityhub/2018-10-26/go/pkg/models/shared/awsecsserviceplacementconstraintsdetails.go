package shared

// AwsEcsServicePlacementConstraintsDetails
// A placement constraint for the tasks in the service.
type AwsEcsServicePlacementConstraintsDetails struct {
	Expression *string `json:"Expression,omitempty"`
	Type       *string `json:"Type,omitempty"`
}
