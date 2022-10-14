package shared

type InstanceQuota struct {
	AvailableMachineCount *int32  `json:"availableMachineCount,omitempty"`
	InstanceType          *string `json:"instanceType,omitempty"`
	Location              *string `json:"location,omitempty"`
}
