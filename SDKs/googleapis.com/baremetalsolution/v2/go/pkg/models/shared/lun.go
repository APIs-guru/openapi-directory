package shared

type LunMultiprotocolTypeEnum string

const (
	LunMultiprotocolTypeEnumMultiprotocolTypeUnspecified LunMultiprotocolTypeEnum = "MULTIPROTOCOL_TYPE_UNSPECIFIED"
	LunMultiprotocolTypeEnumLinux                        LunMultiprotocolTypeEnum = "LINUX"
)

type LunStateEnum string

const (
	LunStateEnumStateUnspecified LunStateEnum = "STATE_UNSPECIFIED"
	LunStateEnumCreating         LunStateEnum = "CREATING"
	LunStateEnumUpdating         LunStateEnum = "UPDATING"
	LunStateEnumReady            LunStateEnum = "READY"
	LunStateEnumDeleting         LunStateEnum = "DELETING"
)

type LunStorageTypeEnum string

const (
	LunStorageTypeEnumStorageTypeUnspecified LunStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
	LunStorageTypeEnumSsd                    LunStorageTypeEnum = "SSD"
	LunStorageTypeEnumHdd                    LunStorageTypeEnum = "HDD"
)

type Lun struct {
	BootLun           *bool                     `json:"bootLun"`
	ID                *string                   `json:"id"`
	MultiprotocolType *LunMultiprotocolTypeEnum `json:"multiprotocolType"`
	Name              *string                   `json:"name"`
	Shareable         *bool                     `json:"shareable"`
	SizeGb            *string                   `json:"sizeGb"`
	State             *LunStateEnum             `json:"state"`
	StorageType       *LunStorageTypeEnum       `json:"storageType"`
	StorageVolume     *string                   `json:"storageVolume"`
	Wwid              *string                   `json:"wwid"`
}
