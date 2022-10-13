package shared

type UpdatePatchBaselineRequest struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity"`
	BaselineID                       string                    `json:"BaselineId"`
	Description                      *string                   `json:"Description"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters"`
	Name                             *string                   `json:"Name"`
	RejectedPatches                  []string                  `json:"RejectedPatches"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction"`
	Replace                          *bool                     `json:"Replace"`
	Sources                          []PatchSource             `json:"Sources"`
}
