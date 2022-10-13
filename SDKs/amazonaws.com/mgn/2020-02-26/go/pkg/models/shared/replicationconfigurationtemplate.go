package shared

type ReplicationConfigurationTemplate struct {
	Arn                                 *string                                                  `json:"arn"`
	AssociateDefaultSecurityGroup       *bool                                                    `json:"associateDefaultSecurityGroup"`
	BandwidthThrottling                 *int64                                                   `json:"bandwidthThrottling"`
	CreatePublicIP                      *bool                                                    `json:"createPublicIP"`
	DataPlaneRouting                    *ReplicationConfigurationDataPlaneRoutingEnum            `json:"dataPlaneRouting"`
	DefaultLargeStagingDiskType         *ReplicationConfigurationDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType"`
	EbsEncryption                       *ReplicationConfigurationEbsEncryptionEnum               `json:"ebsEncryption"`
	EbsEncryptionKeyArn                 *string                                                  `json:"ebsEncryptionKeyArn"`
	ReplicationConfigurationTemplateID  string                                                   `json:"replicationConfigurationTemplateID"`
	ReplicationServerInstanceType       *string                                                  `json:"replicationServerInstanceType"`
	ReplicationServersSecurityGroupsIDs []string                                                 `json:"replicationServersSecurityGroupsIDs"`
	StagingAreaSubnetID                 *string                                                  `json:"stagingAreaSubnetId"`
	StagingAreaTags                     map[string]string                                        `json:"stagingAreaTags"`
	Tags                                map[string]string                                        `json:"tags"`
	UseDedicatedReplicationServer       *bool                                                    `json:"useDedicatedReplicationServer"`
}
