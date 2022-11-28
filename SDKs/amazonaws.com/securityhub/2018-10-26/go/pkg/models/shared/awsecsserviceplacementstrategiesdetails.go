package shared

// AwsEcsServicePlacementStrategiesDetails
// A placement strategy that determines how to place the tasks for the service.
type AwsEcsServicePlacementStrategiesDetails struct {
	Field *string `json:"Field,omitempty"`
	Type  *string `json:"Type,omitempty"`
}
