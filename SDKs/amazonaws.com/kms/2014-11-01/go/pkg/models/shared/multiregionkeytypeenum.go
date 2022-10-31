package shared

type MultiRegionKeyTypeEnum string

const (
	MultiRegionKeyTypeEnumPrimary MultiRegionKeyTypeEnum = "PRIMARY"
	MultiRegionKeyTypeEnumReplica MultiRegionKeyTypeEnum = "REPLICA"
)
