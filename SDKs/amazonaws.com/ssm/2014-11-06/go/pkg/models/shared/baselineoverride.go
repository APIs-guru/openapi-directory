package shared

type BaselineOverride struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules,omitempty"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches,omitempty"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel,omitempty"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity,omitempty"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters,omitempty"`
	OperatingSystem                  *OperatingSystemEnum      `json:"OperatingSystem,omitempty"`
	RejectedPatches                  []string                  `json:"RejectedPatches,omitempty"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction,omitempty"`
	Sources                          []PatchSource             `json:"Sources,omitempty"`
}
