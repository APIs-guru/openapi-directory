package shared

type UpdateInstanceRequest struct {
	AgentVersion         *string              `json:"AgentVersion"`
	AmiID                *string              `json:"AmiId"`
	Architecture         *ArchitectureEnum    `json:"Architecture"`
	AutoScalingType      *AutoScalingTypeEnum `json:"AutoScalingType"`
	EbsOptimized         *bool                `json:"EbsOptimized"`
	Hostname             *string              `json:"Hostname"`
	InstallUpdatesOnBoot *bool                `json:"InstallUpdatesOnBoot"`
	InstanceID           string               `json:"InstanceId"`
	InstanceType         *string              `json:"InstanceType"`
	LayerIds             []string             `json:"LayerIds"`
	Os                   *string              `json:"Os"`
	SSHKeyName           *string              `json:"SshKeyName"`
}
