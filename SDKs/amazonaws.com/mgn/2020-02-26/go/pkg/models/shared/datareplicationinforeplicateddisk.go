package shared

type DataReplicationInfoReplicatedDisk struct {
	BackloggedStorageBytes *int64  `json:"backloggedStorageBytes"`
	DeviceName             *string `json:"deviceName"`
	ReplicatedStorageBytes *int64  `json:"replicatedStorageBytes"`
	RescannedStorageBytes  *int64  `json:"rescannedStorageBytes"`
	TotalStorageBytes      *int64  `json:"totalStorageBytes"`
}
