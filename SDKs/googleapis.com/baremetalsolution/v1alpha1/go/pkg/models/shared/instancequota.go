package shared

type InstanceQuota struct {
	AvailableMachineCount *int32  `json:"availableMachineCount"`
	InstanceType          *string `json:"instanceType"`
	Location              *string `json:"location"`
}
