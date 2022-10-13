package shared

type VolumeConfigPerformanceTierEnum string

const (
	VolumeConfigPerformanceTierEnumVolumePerformanceTierUnspecified VolumeConfigPerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED"
	VolumeConfigPerformanceTierEnumVolumePerformanceTierShared      VolumeConfigPerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_SHARED"
	VolumeConfigPerformanceTierEnumVolumePerformanceTierAssigned    VolumeConfigPerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_ASSIGNED"
	VolumeConfigPerformanceTierEnumVolumePerformanceTierHt          VolumeConfigPerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_HT"
)

type VolumeConfigProtocolEnum string

const (
	VolumeConfigProtocolEnumProtocolUnspecified VolumeConfigProtocolEnum = "PROTOCOL_UNSPECIFIED"
	VolumeConfigProtocolEnumProtocolFc          VolumeConfigProtocolEnum = "PROTOCOL_FC"
	VolumeConfigProtocolEnumProtocolNfs         VolumeConfigProtocolEnum = "PROTOCOL_NFS"
)

type VolumeConfigTypeEnum string

const (
	VolumeConfigTypeEnumTypeUnspecified VolumeConfigTypeEnum = "TYPE_UNSPECIFIED"
	VolumeConfigTypeEnumFlash           VolumeConfigTypeEnum = "FLASH"
	VolumeConfigTypeEnumDisk            VolumeConfigTypeEnum = "DISK"
)

type VolumeConfig struct {
	GcpService       *string                          `json:"gcpService"`
	ID               *string                          `json:"id"`
	LunRanges        []LunRange                       `json:"lunRanges"`
	MachineIds       []string                         `json:"machineIds"`
	Name             *string                          `json:"name"`
	NfsExports       []NfsExport                      `json:"nfsExports"`
	PerformanceTier  *VolumeConfigPerformanceTierEnum `json:"performanceTier"`
	Protocol         *VolumeConfigProtocolEnum        `json:"protocol"`
	SizeGb           *int32                           `json:"sizeGb"`
	SnapshotsEnabled *bool                            `json:"snapshotsEnabled"`
	Type             *VolumeConfigTypeEnum            `json:"type"`
	UserNote         *string                          `json:"userNote"`
}
