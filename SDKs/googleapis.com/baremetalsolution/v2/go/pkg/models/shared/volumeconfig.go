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

// VolumeConfig
// Configuration parameters for a new volume.
type VolumeConfig struct {
	GcpService       *string                          `json:"gcpService,omitempty"`
	ID               *string                          `json:"id,omitempty"`
	LunRanges        []LunRange                       `json:"lunRanges,omitempty"`
	MachineIds       []string                         `json:"machineIds,omitempty"`
	Name             *string                          `json:"name,omitempty"`
	NfsExports       []NfsExport                      `json:"nfsExports,omitempty"`
	PerformanceTier  *VolumeConfigPerformanceTierEnum `json:"performanceTier,omitempty"`
	Protocol         *VolumeConfigProtocolEnum        `json:"protocol,omitempty"`
	SizeGb           *int32                           `json:"sizeGb,omitempty"`
	SnapshotsEnabled *bool                            `json:"snapshotsEnabled,omitempty"`
	Type             *VolumeConfigTypeEnum            `json:"type,omitempty"`
	UserNote         *string                          `json:"userNote,omitempty"`
}

// VolumeConfigInput
// Configuration parameters for a new volume.
type VolumeConfigInput struct {
	GcpService       *string                          `json:"gcpService,omitempty"`
	ID               *string                          `json:"id,omitempty"`
	LunRanges        []LunRange                       `json:"lunRanges,omitempty"`
	MachineIds       []string                         `json:"machineIds,omitempty"`
	NfsExports       []NfsExport                      `json:"nfsExports,omitempty"`
	PerformanceTier  *VolumeConfigPerformanceTierEnum `json:"performanceTier,omitempty"`
	Protocol         *VolumeConfigProtocolEnum        `json:"protocol,omitempty"`
	SizeGb           *int32                           `json:"sizeGb,omitempty"`
	SnapshotsEnabled *bool                            `json:"snapshotsEnabled,omitempty"`
	Type             *VolumeConfigTypeEnum            `json:"type,omitempty"`
	UserNote         *string                          `json:"userNote,omitempty"`
}
