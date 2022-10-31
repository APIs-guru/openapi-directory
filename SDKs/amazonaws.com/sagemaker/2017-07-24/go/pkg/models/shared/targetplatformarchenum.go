package shared

type TargetPlatformArchEnum string

const (
	TargetPlatformArchEnumX8664     TargetPlatformArchEnum = "X86_64"
	TargetPlatformArchEnumX86       TargetPlatformArchEnum = "X86"
	TargetPlatformArchEnumArm64     TargetPlatformArchEnum = "ARM64"
	TargetPlatformArchEnumArmEabi   TargetPlatformArchEnum = "ARM_EABI"
	TargetPlatformArchEnumArmEabihf TargetPlatformArchEnum = "ARM_EABIHF"
)
