package shared

type InstanceAvailabilityEnum string

const (
	InstanceAvailabilityEnumUnspecified InstanceAvailabilityEnum = "UNSPECIFIED"
	InstanceAvailabilityEnumResident    InstanceAvailabilityEnum = "RESIDENT"
	InstanceAvailabilityEnumDynamic     InstanceAvailabilityEnum = "DYNAMIC"
)

type InstanceVMLivenessEnum string

const (
	InstanceVMLivenessEnumLivenessStateUnspecified InstanceVMLivenessEnum = "LIVENESS_STATE_UNSPECIFIED"
	InstanceVMLivenessEnumUnknown                  InstanceVMLivenessEnum = "UNKNOWN"
	InstanceVMLivenessEnumHealthy                  InstanceVMLivenessEnum = "HEALTHY"
	InstanceVMLivenessEnumUnhealthy                InstanceVMLivenessEnum = "UNHEALTHY"
	InstanceVMLivenessEnumDraining                 InstanceVMLivenessEnum = "DRAINING"
	InstanceVMLivenessEnumTimeout                  InstanceVMLivenessEnum = "TIMEOUT"
)

type Instance struct {
	AppEngineRelease *string                   `json:"appEngineRelease"`
	Availability     *InstanceAvailabilityEnum `json:"availability"`
	AverageLatency   *int32                    `json:"averageLatency"`
	Errors           *int32                    `json:"errors"`
	ID               *string                   `json:"id"`
	MemoryUsage      *string                   `json:"memoryUsage"`
	Name             *string                   `json:"name"`
	QPS              *float32                  `json:"qps"`
	Requests         *int32                    `json:"requests"`
	StartTime        *string                   `json:"startTime"`
	VMDebugEnabled   *bool                     `json:"vmDebugEnabled"`
	VMID             *string                   `json:"vmId"`
	VMIP             *string                   `json:"vmIp"`
	VMLiveness       *InstanceVMLivenessEnum   `json:"vmLiveness"`
	VMName           *string                   `json:"vmName"`
	VMStatus         *string                   `json:"vmStatus"`
	VMZoneName       *string                   `json:"vmZoneName"`
}
