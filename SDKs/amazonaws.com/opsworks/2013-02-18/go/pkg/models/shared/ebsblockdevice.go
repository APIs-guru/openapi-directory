package shared



type EbsBlockDevice struct {
    DeleteOnTermination *bool `json:"DeleteOnTermination,omitempty"`
    Iops *int64 `json:"Iops,omitempty"`
    SnapshotID *string `json:"SnapshotId,omitempty"`
    VolumeSize *int64 `json:"VolumeSize,omitempty"`
    VolumeType *VolumeTypeEnum `json:"VolumeType,omitempty"`
    
}

