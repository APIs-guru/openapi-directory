package shared

type InstanceQuota struct {
	AvailableMachineCount *int32  `json:"availableMachineCount,omitempty"`
	GcpService            *string `json:"gcpService,omitempty"`
	InstanceType          *string `json:"instanceType,omitempty"`
	Location              *string `json:"location,omitempty"`
	Name                  *string `json:"name,omitempty"`
}
