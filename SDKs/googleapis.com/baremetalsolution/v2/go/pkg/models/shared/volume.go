package shared

type VolumePerformanceTierEnum string

const (
	VolumePerformanceTierEnumVolumePerformanceTierUnspecified VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED"
	VolumePerformanceTierEnumVolumePerformanceTierShared      VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_SHARED"
	VolumePerformanceTierEnumVolumePerformanceTierAssigned    VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_ASSIGNED"
	VolumePerformanceTierEnumVolumePerformanceTierHt          VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_HT"
)

type VolumeProtocolEnum string

const (
	VolumeProtocolEnumProtocolUnspecified VolumeProtocolEnum = "PROTOCOL_UNSPECIFIED"
	VolumeProtocolEnumFibreChannel        VolumeProtocolEnum = "FIBRE_CHANNEL"
	VolumeProtocolEnumNfs                 VolumeProtocolEnum = "NFS"
)

type VolumeSnapshotAutoDeleteBehaviorEnum string

const (
	VolumeSnapshotAutoDeleteBehaviorEnumSnapshotAutoDeleteBehaviorUnspecified VolumeSnapshotAutoDeleteBehaviorEnum = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED"
	VolumeSnapshotAutoDeleteBehaviorEnumDisabled                              VolumeSnapshotAutoDeleteBehaviorEnum = "DISABLED"
	VolumeSnapshotAutoDeleteBehaviorEnumOldestFirst                           VolumeSnapshotAutoDeleteBehaviorEnum = "OLDEST_FIRST"
	VolumeSnapshotAutoDeleteBehaviorEnumNewestFirst                           VolumeSnapshotAutoDeleteBehaviorEnum = "NEWEST_FIRST"
)

type VolumeStateEnum string

const (
	VolumeStateEnumStateUnspecified VolumeStateEnum = "STATE_UNSPECIFIED"
	VolumeStateEnumCreating         VolumeStateEnum = "CREATING"
	VolumeStateEnumReady            VolumeStateEnum = "READY"
	VolumeStateEnumDeleting         VolumeStateEnum = "DELETING"
	VolumeStateEnumUpdating         VolumeStateEnum = "UPDATING"
)

type VolumeStorageTypeEnum string

const (
	VolumeStorageTypeEnumStorageTypeUnspecified VolumeStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
	VolumeStorageTypeEnumSsd                    VolumeStorageTypeEnum = "SSD"
	VolumeStorageTypeEnumHdd                    VolumeStorageTypeEnum = "HDD"
)

type Volume struct {
	AutoGrownSizeGib           *string                               `json:"autoGrownSizeGib"`
	BootVolume                 *bool                                 `json:"bootVolume"`
	CurrentSizeGib             *string                               `json:"currentSizeGib"`
	EmergencySizeGib           *string                               `json:"emergencySizeGib"`
	ID                         *string                               `json:"id"`
	Labels                     map[string]string                     `json:"labels"`
	MaxSizeGib                 *string                               `json:"maxSizeGib"`
	Name                       *string                               `json:"name"`
	Notes                      *string                               `json:"notes"`
	OriginallyRequestedSizeGib *string                               `json:"originallyRequestedSizeGib"`
	PerformanceTier            *VolumePerformanceTierEnum            `json:"performanceTier"`
	Pod                        *string                               `json:"pod"`
	Protocol                   *VolumeProtocolEnum                   `json:"protocol"`
	RemainingSpaceGib          *string                               `json:"remainingSpaceGib"`
	RequestedSizeGib           *string                               `json:"requestedSizeGib"`
	SnapshotAutoDeleteBehavior *VolumeSnapshotAutoDeleteBehaviorEnum `json:"snapshotAutoDeleteBehavior"`
	SnapshotEnabled            *bool                                 `json:"snapshotEnabled"`
	SnapshotReservationDetail  *SnapshotReservationDetail            `json:"snapshotReservationDetail"`
	SnapshotSchedulePolicy     *string                               `json:"snapshotSchedulePolicy"`
	State                      *VolumeStateEnum                      `json:"state"`
	StorageType                *VolumeStorageTypeEnum                `json:"storageType"`
}
