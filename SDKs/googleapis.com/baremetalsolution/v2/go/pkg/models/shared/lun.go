package shared




type LunMultiprotocolTypeEnum string

const (
    LunMultiprotocolTypeEnumMultiprotocolTypeUnspecified LunMultiprotocolTypeEnum = "MULTIPROTOCOL_TYPE_UNSPECIFIED"
LunMultiprotocolTypeEnumLinux LunMultiprotocolTypeEnum = "LINUX"
)



type LunStateEnum string

const (
    LunStateEnumStateUnspecified LunStateEnum = "STATE_UNSPECIFIED"
LunStateEnumCreating LunStateEnum = "CREATING"
LunStateEnumUpdating LunStateEnum = "UPDATING"
LunStateEnumReady LunStateEnum = "READY"
LunStateEnumDeleting LunStateEnum = "DELETING"
)



type LunStorageTypeEnum string

const (
    LunStorageTypeEnumStorageTypeUnspecified LunStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
LunStorageTypeEnumSsd LunStorageTypeEnum = "SSD"
LunStorageTypeEnumHdd LunStorageTypeEnum = "HDD"
)


type Lun struct {
    BootLun *bool `json:"bootLun,omitempty"`
    ID *string `json:"id,omitempty"`
    MultiprotocolType *LunMultiprotocolTypeEnum `json:"multiprotocolType,omitempty"`
    Name *string `json:"name,omitempty"`
    Shareable *bool `json:"shareable,omitempty"`
    SizeGb *string `json:"sizeGb,omitempty"`
    State *LunStateEnum `json:"state,omitempty"`
    StorageType *LunStorageTypeEnum `json:"storageType,omitempty"`
    StorageVolume *string `json:"storageVolume,omitempty"`
    Wwid *string `json:"wwid,omitempty"`
    
}

