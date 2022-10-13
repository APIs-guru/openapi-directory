package shared

type CreatePatchBaselineRequest struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity"`
	ClientToken                      *string                   `json:"ClientToken"`
	Description                      *string                   `json:"Description"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters"`
	Name                             string                    `json:"Name"`
	OperatingSystem                  *OperatingSystemEnum      `json:"OperatingSystem"`
	RejectedPatches                  []string                  `json:"RejectedPatches"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction"`
	Sources                          []PatchSource             `json:"Sources"`
	Tags                             []Tag                     `json:"Tags"`
}
