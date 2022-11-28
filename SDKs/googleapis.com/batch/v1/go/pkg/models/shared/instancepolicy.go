package shared

type InstancePolicyProvisioningModelEnum string

const (
	InstancePolicyProvisioningModelEnumProvisioningModelUnspecified InstancePolicyProvisioningModelEnum = "PROVISIONING_MODEL_UNSPECIFIED"
	InstancePolicyProvisioningModelEnumStandard                     InstancePolicyProvisioningModelEnum = "STANDARD"
	InstancePolicyProvisioningModelEnumSpot                         InstancePolicyProvisioningModelEnum = "SPOT"
	InstancePolicyProvisioningModelEnumPreemptible                  InstancePolicyProvisioningModelEnum = "PREEMPTIBLE"
)

// InstancePolicy
// InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
type InstancePolicy struct {
	Accelerators      []Accelerator                        `json:"accelerators,omitempty"`
	Disks             []AttachedDisk                       `json:"disks,omitempty"`
	MachineType       *string                              `json:"machineType,omitempty"`
	MinCPUPlatform    *string                              `json:"minCpuPlatform,omitempty"`
	ProvisioningModel *InstancePolicyProvisioningModelEnum `json:"provisioningModel,omitempty"`
}
