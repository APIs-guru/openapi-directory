package shared

type MultiRegionConfiguration struct {
	MultiRegionKeyType *MultiRegionKeyTypeEnum `json:"MultiRegionKeyType"`
	PrimaryKey         *MultiRegionKey         `json:"PrimaryKey"`
	ReplicaKeys        []MultiRegionKey        `json:"ReplicaKeys"`
}
