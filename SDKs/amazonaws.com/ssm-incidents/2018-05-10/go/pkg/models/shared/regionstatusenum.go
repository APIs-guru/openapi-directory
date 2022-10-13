package shared

type RegionStatusEnum string

const (
	RegionStatusEnumActive   RegionStatusEnum = "ACTIVE"
	RegionStatusEnumCreating RegionStatusEnum = "CREATING"
	RegionStatusEnumDeleting RegionStatusEnum = "DELETING"
	RegionStatusEnumFailed   RegionStatusEnum = "FAILED"
)
