package shared

type RootDeviceTypeEnum string

const (
	RootDeviceTypeEnumEbs           RootDeviceTypeEnum = "ebs"
	RootDeviceTypeEnumInstanceStore RootDeviceTypeEnum = "instance-store"
)
