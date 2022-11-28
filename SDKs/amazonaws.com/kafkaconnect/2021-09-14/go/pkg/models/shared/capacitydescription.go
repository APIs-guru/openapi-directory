package shared

// CapacityDescription
// A description of the connector's capacity.
type CapacityDescription struct {
	AutoScaling         *AutoScalingDescription         `json:"autoScaling,omitempty"`
	ProvisionedCapacity *ProvisionedCapacityDescription `json:"provisionedCapacity,omitempty"`
}
