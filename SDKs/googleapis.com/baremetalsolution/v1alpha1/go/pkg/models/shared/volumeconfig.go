package shared




type VolumeConfigProtocolEnum string

const (
    VolumeConfigProtocolEnumProtocolUnspecified VolumeConfigProtocolEnum = "PROTOCOL_UNSPECIFIED"
VolumeConfigProtocolEnumProtocolFc VolumeConfigProtocolEnum = "PROTOCOL_FC"
VolumeConfigProtocolEnumProtocolNfs VolumeConfigProtocolEnum = "PROTOCOL_NFS"
)



type VolumeConfigTypeEnum string

const (
    VolumeConfigTypeEnumTypeUnspecified VolumeConfigTypeEnum = "TYPE_UNSPECIFIED"
VolumeConfigTypeEnumFlash VolumeConfigTypeEnum = "FLASH"
VolumeConfigTypeEnumDisk VolumeConfigTypeEnum = "DISK"
)


type VolumeConfig struct {
    ID *string `json:"id,omitempty"`
    Location *string `json:"location,omitempty"`
    LunRanges []LunRange `json:"lunRanges,omitempty"`
    MachineIds []string `json:"machineIds,omitempty"`
    NfsExports []NfsExport `json:"nfsExports,omitempty"`
    Protocol *VolumeConfigProtocolEnum `json:"protocol,omitempty"`
    SizeGb *int32 `json:"sizeGb,omitempty"`
    SnapshotsEnabled *bool `json:"snapshotsEnabled,omitempty"`
    Type *VolumeConfigTypeEnum `json:"type,omitempty"`
    UserNote *string `json:"userNote,omitempty"`
    
}

