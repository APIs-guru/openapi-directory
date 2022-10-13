package shared

type ReplicationConfiguration struct {
	AssociateDefaultSecurityGroup       *bool                                                    `json:"associateDefaultSecurityGroup"`
	BandwidthThrottling                 *int64                                                   `json:"bandwidthThrottling"`
	CreatePublicIP                      *bool                                                    `json:"createPublicIP"`
	DataPlaneRouting                    *ReplicationConfigurationDataPlaneRoutingEnum            `json:"dataPlaneRouting"`
	DefaultLargeStagingDiskType         *ReplicationConfigurationDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType"`
	EbsEncryption                       *ReplicationConfigurationEbsEncryptionEnum               `json:"ebsEncryption"`
	EbsEncryptionKeyArn                 *string                                                  `json:"ebsEncryptionKeyArn"`
	Name                                *string                                                  `json:"name"`
	ReplicatedDisks                     []ReplicationConfigurationReplicatedDisk                 `json:"replicatedDisks"`
	ReplicationServerInstanceType       *string                                                  `json:"replicationServerInstanceType"`
	ReplicationServersSecurityGroupsIDs []string                                                 `json:"replicationServersSecurityGroupsIDs"`
	SourceServerID                      *string                                                  `json:"sourceServerID"`
	StagingAreaSubnetID                 *string                                                  `json:"stagingAreaSubnetId"`
	StagingAreaTags                     map[string]string                                        `json:"stagingAreaTags"`
	UseDedicatedReplicationServer       *bool                                                    `json:"useDedicatedReplicationServer"`
}
