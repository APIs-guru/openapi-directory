package shared

type VolumeSnapshotTypeEnum string

const (
	VolumeSnapshotTypeEnumSnapshotTypeUnspecified VolumeSnapshotTypeEnum = "SNAPSHOT_TYPE_UNSPECIFIED"
	VolumeSnapshotTypeEnumAdHoc                   VolumeSnapshotTypeEnum = "AD_HOC"
	VolumeSnapshotTypeEnumScheduled               VolumeSnapshotTypeEnum = "SCHEDULED"
)

// VolumeSnapshotInput
// A snapshot of a volume. Only boot volumes can have snapshots.
type VolumeSnapshotInput struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}

// VolumeSnapshot
// A snapshot of a volume. Only boot volumes can have snapshots.
type VolumeSnapshot struct {
	CreateTime    *string                 `json:"createTime,omitempty"`
	Description   *string                 `json:"description,omitempty"`
	ID            *string                 `json:"id,omitempty"`
	Name          *string                 `json:"name,omitempty"`
	StorageVolume *string                 `json:"storageVolume,omitempty"`
	Type          *VolumeSnapshotTypeEnum `json:"type,omitempty"`
}
