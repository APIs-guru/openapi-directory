package shared

type ReplicationConfiguration struct {
	AssociateDefaultSecurityGroup       *bool                                                    `json:"associateDefaultSecurityGroup,omitempty"`
	BandwidthThrottling                 *int64                                                   `json:"bandwidthThrottling,omitempty"`
	CreatePublicIP                      *bool                                                    `json:"createPublicIP,omitempty"`
	DataPlaneRouting                    *ReplicationConfigurationDataPlaneRoutingEnum            `json:"dataPlaneRouting,omitempty"`
	DefaultLargeStagingDiskType         *ReplicationConfigurationDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType,omitempty"`
	EbsEncryption                       *ReplicationConfigurationEbsEncryptionEnum               `json:"ebsEncryption,omitempty"`
	EbsEncryptionKeyArn                 *string                                                  `json:"ebsEncryptionKeyArn,omitempty"`
	Name                                *string                                                  `json:"name,omitempty"`
	ReplicatedDisks                     []ReplicationConfigurationReplicatedDisk                 `json:"replicatedDisks,omitempty"`
	ReplicationServerInstanceType       *string                                                  `json:"replicationServerInstanceType,omitempty"`
	ReplicationServersSecurityGroupsIDs []string                                                 `json:"replicationServersSecurityGroupsIDs,omitempty"`
	SourceServerID                      *string                                                  `json:"sourceServerID,omitempty"`
	StagingAreaSubnetID                 *string                                                  `json:"stagingAreaSubnetId,omitempty"`
	StagingAreaTags                     map[string]string                                        `json:"stagingAreaTags,omitempty"`
	UseDedicatedReplicationServer       *bool                                                    `json:"useDedicatedReplicationServer,omitempty"`
}
