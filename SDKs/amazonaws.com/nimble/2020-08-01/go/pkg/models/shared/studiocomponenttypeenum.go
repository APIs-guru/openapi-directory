package shared

type StudioComponentTypeEnum string

const (
	StudioComponentTypeEnumActiveDirectory  StudioComponentTypeEnum = "ACTIVE_DIRECTORY"
	StudioComponentTypeEnumSharedFileSystem StudioComponentTypeEnum = "SHARED_FILE_SYSTEM"
	StudioComponentTypeEnumComputeFarm      StudioComponentTypeEnum = "COMPUTE_FARM"
	StudioComponentTypeEnumLicenseService   StudioComponentTypeEnum = "LICENSE_SERVICE"
	StudioComponentTypeEnumCustom           StudioComponentTypeEnum = "CUSTOM"
)
