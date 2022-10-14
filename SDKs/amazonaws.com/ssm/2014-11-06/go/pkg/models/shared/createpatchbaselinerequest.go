package shared

type CreatePatchBaselineRequest struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules,omitempty"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches,omitempty"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel,omitempty"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity,omitempty"`
	ClientToken                      *string                   `json:"ClientToken,omitempty"`
	Description                      *string                   `json:"Description,omitempty"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters,omitempty"`
	Name                             string                    `json:"Name"`
	OperatingSystem                  *OperatingSystemEnum      `json:"OperatingSystem,omitempty"`
	RejectedPatches                  []string                  `json:"RejectedPatches,omitempty"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction,omitempty"`
	Sources                          []PatchSource             `json:"Sources,omitempty"`
	Tags                             []Tag                     `json:"Tags,omitempty"`
}
