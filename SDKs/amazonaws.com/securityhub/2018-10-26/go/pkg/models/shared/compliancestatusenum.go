package shared

type ComplianceStatusEnum string

const (
	ComplianceStatusEnumPassed       ComplianceStatusEnum = "PASSED"
	ComplianceStatusEnumWarning      ComplianceStatusEnum = "WARNING"
	ComplianceStatusEnumFailed       ComplianceStatusEnum = "FAILED"
	ComplianceStatusEnumNotAvailable ComplianceStatusEnum = "NOT_AVAILABLE"
)
