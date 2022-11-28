package shared

// ContainerServicePower
// <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>
type ContainerServicePower struct {
	CPUCount    *float32 `json:"cpuCount,omitempty"`
	IsActive    *bool    `json:"isActive,omitempty"`
	Name        *string  `json:"name,omitempty"`
	PowerID     *string  `json:"powerId,omitempty"`
	Price       *float32 `json:"price,omitempty"`
	RAMSizeInGb *float32 `json:"ramSizeInGb,omitempty"`
}
