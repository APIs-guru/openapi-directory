package shared

type NfsShareStateEnum string

const (
	NfsShareStateEnumStateUnspecified NfsShareStateEnum = "STATE_UNSPECIFIED"
	NfsShareStateEnumProvisioned      NfsShareStateEnum = "PROVISIONED"
	NfsShareStateEnumCreating         NfsShareStateEnum = "CREATING"
	NfsShareStateEnumUpdating         NfsShareStateEnum = "UPDATING"
	NfsShareStateEnumDeleting         NfsShareStateEnum = "DELETING"
)

type NfsShareStorageTypeEnum string

const (
	NfsShareStorageTypeEnumStorageTypeUnspecified NfsShareStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
	NfsShareStorageTypeEnumSsd                    NfsShareStorageTypeEnum = "SSD"
	NfsShareStorageTypeEnumHdd                    NfsShareStorageTypeEnum = "HDD"
)

type NfsShare struct {
	AllowedClients   []AllowedClient          `json:"allowedClients"`
	ID               *string                  `json:"id"`
	Labels           map[string]string        `json:"labels"`
	Name             *string                  `json:"name"`
	NfsShareID       *string                  `json:"nfsShareId"`
	RequestedSizeGib *string                  `json:"requestedSizeGib"`
	State            *NfsShareStateEnum       `json:"state"`
	StorageType      *NfsShareStorageTypeEnum `json:"storageType"`
	Volume           *string                  `json:"volume"`
}
