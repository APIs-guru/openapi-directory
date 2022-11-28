package shared

type ClusterStateEnum string

const (
	ClusterStateEnumStateNotKnown ClusterStateEnum = "STATE_NOT_KNOWN"
	ClusterStateEnumReady         ClusterStateEnum = "READY"
	ClusterStateEnumCreating      ClusterStateEnum = "CREATING"
	ClusterStateEnumResizing      ClusterStateEnum = "RESIZING"
	ClusterStateEnumDisabled      ClusterStateEnum = "DISABLED"
)

type ClusterDefaultStorageTypeEnum string

const (
	ClusterDefaultStorageTypeEnumStorageTypeUnspecified ClusterDefaultStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
	ClusterDefaultStorageTypeEnumSsd                    ClusterDefaultStorageTypeEnum = "SSD"
	ClusterDefaultStorageTypeEnumHdd                    ClusterDefaultStorageTypeEnum = "HDD"
)

// Cluster
// A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
type Cluster struct {
	DefaultStorageType *ClusterDefaultStorageTypeEnum `json:"defaultStorageType,omitempty"`
	EncryptionConfig   *EncryptionConfig              `json:"encryptionConfig,omitempty"`
	Location           *string                        `json:"location,omitempty"`
	Name               *string                        `json:"name,omitempty"`
	ServeNodes         *int32                         `json:"serveNodes,omitempty"`
	State              *ClusterStateEnum              `json:"state,omitempty"`
}

// ClusterInput
// A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
type ClusterInput struct {
	DefaultStorageType *ClusterDefaultStorageTypeEnum `json:"defaultStorageType,omitempty"`
	EncryptionConfig   *EncryptionConfig              `json:"encryptionConfig,omitempty"`
	Location           *string                        `json:"location,omitempty"`
	Name               *string                        `json:"name,omitempty"`
	ServeNodes         *int32                         `json:"serveNodes,omitempty"`
}
