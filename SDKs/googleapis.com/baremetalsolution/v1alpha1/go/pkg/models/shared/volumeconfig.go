package shared

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
	ID               *string                   `json:"id"`
	Location         *string                   `json:"location"`
	LunRanges        []LunRange                `json:"lunRanges"`
	MachineIds       []string                  `json:"machineIds"`
	NfsExports       []NfsExport               `json:"nfsExports"`
	Protocol         *VolumeConfigProtocolEnum `json:"protocol"`
	SizeGb           *int32                    `json:"sizeGb"`
	SnapshotsEnabled *bool                     `json:"snapshotsEnabled"`
	Type             *VolumeConfigTypeEnum     `json:"type"`
	UserNote         *string                   `json:"userNote"`
}
