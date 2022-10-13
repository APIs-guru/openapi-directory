package shared

type CapacityDescription struct {
	AutoScaling         *AutoScalingDescription         `json:"autoScaling"`
	ProvisionedCapacity *ProvisionedCapacityDescription `json:"provisionedCapacity"`
}
