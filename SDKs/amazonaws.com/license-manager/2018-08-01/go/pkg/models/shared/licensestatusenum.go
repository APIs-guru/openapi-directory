package shared

type LicenseStatusEnum string

const (
	LicenseStatusEnumAvailable        LicenseStatusEnum = "AVAILABLE"
	LicenseStatusEnumPendingAvailable LicenseStatusEnum = "PENDING_AVAILABLE"
	LicenseStatusEnumDeactivated      LicenseStatusEnum = "DEACTIVATED"
	LicenseStatusEnumSuspended        LicenseStatusEnum = "SUSPENDED"
	LicenseStatusEnumExpired          LicenseStatusEnum = "EXPIRED"
	LicenseStatusEnumPendingDelete    LicenseStatusEnum = "PENDING_DELETE"
	LicenseStatusEnumDeleted          LicenseStatusEnum = "DELETED"
)
