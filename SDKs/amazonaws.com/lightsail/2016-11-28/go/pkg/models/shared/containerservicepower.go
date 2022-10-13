package shared

type ContainerServicePower struct {
	CPUCount    *float32 `json:"cpuCount"`
	IsActive    *bool    `json:"isActive"`
	Name        *string  `json:"name"`
	PowerID     *string  `json:"powerId"`
	Price       *float32 `json:"price"`
	RAMSizeInGb *float32 `json:"ramSizeInGb"`
}
