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
	AllowedClients   []AllowedClient          `json:"allowedClients,omitempty"`
	ID               *string                  `json:"id,omitempty"`
	Labels           map[string]string        `json:"labels,omitempty"`
	Name             *string                  `json:"name,omitempty"`
	NfsShareID       *string                  `json:"nfsShareId,omitempty"`
	RequestedSizeGib *string                  `json:"requestedSizeGib,omitempty"`
	State            *NfsShareStateEnum       `json:"state,omitempty"`
	StorageType      *NfsShareStorageTypeEnum `json:"storageType,omitempty"`
	Volume           *string                  `json:"volume,omitempty"`
}
