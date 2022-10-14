package shared

type UpdateInstanceRequest struct {
	AgentVersion         *string              `json:"AgentVersion,omitempty"`
	AmiID                *string              `json:"AmiId,omitempty"`
	Architecture         *ArchitectureEnum    `json:"Architecture,omitempty"`
	AutoScalingType      *AutoScalingTypeEnum `json:"AutoScalingType,omitempty"`
	EbsOptimized         *bool                `json:"EbsOptimized,omitempty"`
	Hostname             *string              `json:"Hostname,omitempty"`
	InstallUpdatesOnBoot *bool                `json:"InstallUpdatesOnBoot,omitempty"`
	InstanceID           string               `json:"InstanceId"`
	InstanceType         *string              `json:"InstanceType,omitempty"`
	LayerIds             []string             `json:"LayerIds,omitempty"`
	Os                   *string              `json:"Os,omitempty"`
	SSHKeyName           *string              `json:"SshKeyName,omitempty"`
}
