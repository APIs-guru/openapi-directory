package shared

type EbsBlockDevice struct {
	DeleteOnTermination *bool           `json:"DeleteOnTermination"`
	Iops                *int64          `json:"Iops"`
	SnapshotID          *string         `json:"SnapshotId"`
	VolumeSize          *int64          `json:"VolumeSize"`
	VolumeType          *VolumeTypeEnum `json:"VolumeType"`
}
