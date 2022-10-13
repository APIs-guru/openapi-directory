package shared

type InstanceQuota struct {
	AvailableMachineCount *int32  `json:"availableMachineCount"`
	GcpService            *string `json:"gcpService"`
	InstanceType          *string `json:"instanceType"`
	Location              *string `json:"location"`
	Name                  *string `json:"name"`
}
