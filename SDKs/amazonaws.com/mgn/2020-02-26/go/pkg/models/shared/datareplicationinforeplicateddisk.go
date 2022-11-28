package shared

// DataReplicationInfoReplicatedDisk
// Request to query disks replicated.
type DataReplicationInfoReplicatedDisk struct {
	BackloggedStorageBytes *int64  `json:"backloggedStorageBytes,omitempty"`
	DeviceName             *string `json:"deviceName,omitempty"`
	ReplicatedStorageBytes *int64  `json:"replicatedStorageBytes,omitempty"`
	RescannedStorageBytes  *int64  `json:"rescannedStorageBytes,omitempty"`
	TotalStorageBytes      *int64  `json:"totalStorageBytes,omitempty"`
}
