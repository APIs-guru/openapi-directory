package shared

type MultiRegionConfiguration struct {
	MultiRegionKeyType *MultiRegionKeyTypeEnum `json:"MultiRegionKeyType,omitempty"`
	PrimaryKey         *MultiRegionKey         `json:"PrimaryKey,omitempty"`
	ReplicaKeys        []MultiRegionKey        `json:"ReplicaKeys,omitempty"`
}
