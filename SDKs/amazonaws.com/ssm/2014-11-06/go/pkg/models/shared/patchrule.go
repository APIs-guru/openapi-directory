package shared

type PatchRule struct {
	ApproveAfterDays  *int64                    `json:"ApproveAfterDays"`
	ApproveUntilDate  *string                   `json:"ApproveUntilDate"`
	ComplianceLevel   *PatchComplianceLevelEnum `json:"ComplianceLevel"`
	EnableNonSecurity *bool                     `json:"EnableNonSecurity"`
	PatchFilterGroup  PatchFilterGroup          `json:"PatchFilterGroup"`
}
