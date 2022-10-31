package shared

type ReplicationConfigurationReplicatedDisk struct {
	DeviceName      *string                                                    `json:"deviceName,omitempty"`
	Iops            *int64                                                     `json:"iops,omitempty"`
	IsBootDisk      *bool                                                      `json:"isBootDisk,omitempty"`
	StagingDiskType *ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum `json:"stagingDiskType,omitempty"`
}
