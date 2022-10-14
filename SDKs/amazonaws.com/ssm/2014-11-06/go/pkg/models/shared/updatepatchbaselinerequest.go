package shared

type UpdatePatchBaselineRequest struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules,omitempty"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches,omitempty"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel,omitempty"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity,omitempty"`
	BaselineID                       string                    `json:"BaselineId"`
	Description                      *string                   `json:"Description,omitempty"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters,omitempty"`
	Name                             *string                   `json:"Name,omitempty"`
	RejectedPatches                  []string                  `json:"RejectedPatches,omitempty"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction,omitempty"`
	Replace                          *bool                     `json:"Replace,omitempty"`
	Sources                          []PatchSource             `json:"Sources,omitempty"`
}
