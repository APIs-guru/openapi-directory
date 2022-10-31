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
	AutoGrownSizeGib           *string                               `json:"autoGrownSizeGib,omitempty"`
	BootVolume                 *bool                                 `json:"bootVolume,omitempty"`
	CurrentSizeGib             *string                               `json:"currentSizeGib,omitempty"`
	EmergencySizeGib           *string                               `json:"emergencySizeGib,omitempty"`
	ID                         *string                               `json:"id,omitempty"`
	Labels                     map[string]string                     `json:"labels,omitempty"`
	MaxSizeGib                 *string                               `json:"maxSizeGib,omitempty"`
	Name                       *string                               `json:"name,omitempty"`
	Notes                      *string                               `json:"notes,omitempty"`
	OriginallyRequestedSizeGib *string                               `json:"originallyRequestedSizeGib,omitempty"`
	PerformanceTier            *VolumePerformanceTierEnum            `json:"performanceTier,omitempty"`
	Pod                        *string                               `json:"pod,omitempty"`
	Protocol                   *VolumeProtocolEnum                   `json:"protocol,omitempty"`
	RemainingSpaceGib          *string                               `json:"remainingSpaceGib,omitempty"`
	RequestedSizeGib           *string                               `json:"requestedSizeGib,omitempty"`
	SnapshotAutoDeleteBehavior *VolumeSnapshotAutoDeleteBehaviorEnum `json:"snapshotAutoDeleteBehavior,omitempty"`
	SnapshotEnabled            *bool                                 `json:"snapshotEnabled,omitempty"`
	SnapshotReservationDetail  *SnapshotReservationDetail            `json:"snapshotReservationDetail,omitempty"`
	SnapshotSchedulePolicy     *string                               `json:"snapshotSchedulePolicy,omitempty"`
	State                      *VolumeStateEnum                      `json:"state,omitempty"`
	StorageType                *VolumeStorageTypeEnum                `json:"storageType,omitempty"`
}
