package shared

type PatchComplianceDataStateEnum string

const (
	PatchComplianceDataStateEnumInstalled              PatchComplianceDataStateEnum = "INSTALLED"
	PatchComplianceDataStateEnumInstalledOther         PatchComplianceDataStateEnum = "INSTALLED_OTHER"
	PatchComplianceDataStateEnumInstalledPendingReboot PatchComplianceDataStateEnum = "INSTALLED_PENDING_REBOOT"
	PatchComplianceDataStateEnumInstalledRejected      PatchComplianceDataStateEnum = "INSTALLED_REJECTED"
	PatchComplianceDataStateEnumMissing                PatchComplianceDataStateEnum = "MISSING"
	PatchComplianceDataStateEnumNotApplicable          PatchComplianceDataStateEnum = "NOT_APPLICABLE"
	PatchComplianceDataStateEnumFailed                 PatchComplianceDataStateEnum = "FAILED"
)
