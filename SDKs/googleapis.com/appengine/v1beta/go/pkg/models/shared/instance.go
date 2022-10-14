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
	AppEngineRelease *string                   `json:"appEngineRelease,omitempty"`
	Availability     *InstanceAvailabilityEnum `json:"availability,omitempty"`
	AverageLatency   *int32                    `json:"averageLatency,omitempty"`
	Errors           *int32                    `json:"errors,omitempty"`
	ID               *string                   `json:"id,omitempty"`
	MemoryUsage      *string                   `json:"memoryUsage,omitempty"`
	Name             *string                   `json:"name,omitempty"`
	QPS              *float32                  `json:"qps,omitempty"`
	Requests         *int32                    `json:"requests,omitempty"`
	StartTime        *string                   `json:"startTime,omitempty"`
	VMDebugEnabled   *bool                     `json:"vmDebugEnabled,omitempty"`
	VMID             *string                   `json:"vmId,omitempty"`
	VMIP             *string                   `json:"vmIp,omitempty"`
	VMLiveness       *InstanceVMLivenessEnum   `json:"vmLiveness,omitempty"`
	VMName           *string                   `json:"vmName,omitempty"`
	VMStatus         *string                   `json:"vmStatus,omitempty"`
	VMZoneName       *string                   `json:"vmZoneName,omitempty"`
}
