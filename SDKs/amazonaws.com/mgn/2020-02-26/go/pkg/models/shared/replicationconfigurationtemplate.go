package shared

type ReplicationConfigurationTemplate struct {
	Arn                                 *string                                                  `json:"arn,omitempty"`
	AssociateDefaultSecurityGroup       *bool                                                    `json:"associateDefaultSecurityGroup,omitempty"`
	BandwidthThrottling                 *int64                                                   `json:"bandwidthThrottling,omitempty"`
	CreatePublicIP                      *bool                                                    `json:"createPublicIP,omitempty"`
	DataPlaneRouting                    *ReplicationConfigurationDataPlaneRoutingEnum            `json:"dataPlaneRouting,omitempty"`
	DefaultLargeStagingDiskType         *ReplicationConfigurationDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType,omitempty"`
	EbsEncryption                       *ReplicationConfigurationEbsEncryptionEnum               `json:"ebsEncryption,omitempty"`
	EbsEncryptionKeyArn                 *string                                                  `json:"ebsEncryptionKeyArn,omitempty"`
	ReplicationConfigurationTemplateID  string                                                   `json:"replicationConfigurationTemplateID"`
	ReplicationServerInstanceType       *string                                                  `json:"replicationServerInstanceType,omitempty"`
	ReplicationServersSecurityGroupsIDs []string                                                 `json:"replicationServersSecurityGroupsIDs,omitempty"`
	StagingAreaSubnetID                 *string                                                  `json:"stagingAreaSubnetId,omitempty"`
	StagingAreaTags                     map[string]string                                        `json:"stagingAreaTags,omitempty"`
	Tags                                map[string]string                                        `json:"tags,omitempty"`
	UseDedicatedReplicationServer       *bool                                                    `json:"useDedicatedReplicationServer,omitempty"`
}
