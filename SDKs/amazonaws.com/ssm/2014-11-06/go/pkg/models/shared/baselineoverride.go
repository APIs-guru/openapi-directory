package shared

type BaselineOverride struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters"`
	OperatingSystem                  *OperatingSystemEnum      `json:"OperatingSystem"`
	RejectedPatches                  []string                  `json:"RejectedPatches"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction"`
	Sources                          []PatchSource             `json:"Sources"`
}
