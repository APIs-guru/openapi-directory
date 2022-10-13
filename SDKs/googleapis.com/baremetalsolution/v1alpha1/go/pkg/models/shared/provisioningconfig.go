package shared

type ProvisioningConfig struct {
	Instances []InstanceConfig `json:"instances"`
	Networks  []NetworkConfig  `json:"networks"`
	TicketID  *string          `json:"ticketId"`
	Volumes   []VolumeConfig   `json:"volumes"`
}
