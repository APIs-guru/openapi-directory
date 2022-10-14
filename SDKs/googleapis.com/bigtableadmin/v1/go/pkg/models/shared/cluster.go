package shared

type ClusterDefaultStorageTypeEnum string

const (
	ClusterDefaultStorageTypeEnumStorageTypeUnspecified ClusterDefaultStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
	ClusterDefaultStorageTypeEnumSsd                    ClusterDefaultStorageTypeEnum = "SSD"
	ClusterDefaultStorageTypeEnumHdd                    ClusterDefaultStorageTypeEnum = "HDD"
)

type ClusterStateEnum string

const (
	ClusterStateEnumStateNotKnown ClusterStateEnum = "STATE_NOT_KNOWN"
	ClusterStateEnumReady         ClusterStateEnum = "READY"
	ClusterStateEnumCreating      ClusterStateEnum = "CREATING"
	ClusterStateEnumResizing      ClusterStateEnum = "RESIZING"
	ClusterStateEnumDisabled      ClusterStateEnum = "DISABLED"
)

type Cluster struct {
	DefaultStorageType *ClusterDefaultStorageTypeEnum `json:"defaultStorageType,omitempty"`
	EncryptionConfig   *EncryptionConfig              `json:"encryptionConfig,omitempty"`
	Location           *string                        `json:"location,omitempty"`
	Name               *string                        `json:"name,omitempty"`
	ServeNodes         *int32                         `json:"serveNodes,omitempty"`
	State              *ClusterStateEnum              `json:"state,omitempty"`
}
