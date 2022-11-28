package shared

type InstanceStatusProvisioningModelEnum string

const (
	InstanceStatusProvisioningModelEnumProvisioningModelUnspecified InstanceStatusProvisioningModelEnum = "PROVISIONING_MODEL_UNSPECIFIED"
	InstanceStatusProvisioningModelEnumStandard                     InstanceStatusProvisioningModelEnum = "STANDARD"
	InstanceStatusProvisioningModelEnumSpot                         InstanceStatusProvisioningModelEnum = "SPOT"
	InstanceStatusProvisioningModelEnumPreemptible                  InstanceStatusProvisioningModelEnum = "PREEMPTIBLE"
)

// InstanceStatus
// VM instance status.
type InstanceStatus struct {
	MachineType       *string                              `json:"machineType,omitempty"`
	ProvisioningModel *InstanceStatusProvisioningModelEnum `json:"provisioningModel,omitempty"`
	TaskPack          *string                              `json:"taskPack,omitempty"`
}
