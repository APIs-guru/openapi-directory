package shared

type ReplicationConfigurationReplicatedDisk struct {
	DeviceName      *string                                                    `json:"deviceName"`
	Iops            *int64                                                     `json:"iops"`
	IsBootDisk      *bool                                                      `json:"isBootDisk"`
	StagingDiskType *ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum `json:"stagingDiskType"`
}
