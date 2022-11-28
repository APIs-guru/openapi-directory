package shared

// PatchRule
// Defines an approval rule for a patch baseline.
type PatchRule struct {
	ApproveAfterDays  *int64                    `json:"ApproveAfterDays,omitempty"`
	ApproveUntilDate  *string                   `json:"ApproveUntilDate,omitempty"`
	ComplianceLevel   *PatchComplianceLevelEnum `json:"ComplianceLevel,omitempty"`
	EnableNonSecurity *bool                     `json:"EnableNonSecurity,omitempty"`
	PatchFilterGroup  PatchFilterGroup          `json:"PatchFilterGroup"`
}
