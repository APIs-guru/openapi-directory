package shared

import (
	"time"
)

type UpdatePatchBaselineResult struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules,omitempty"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches,omitempty"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel,omitempty"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity,omitempty"`
	BaselineID                       *string                   `json:"BaselineId,omitempty"`
	CreatedDate                      *time.Time                `json:"CreatedDate,omitempty"`
	Description                      *string                   `json:"Description,omitempty"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters,omitempty"`
	ModifiedDate                     *time.Time                `json:"ModifiedDate,omitempty"`
	Name                             *string                   `json:"Name,omitempty"`
	OperatingSystem                  *OperatingSystemEnum      `json:"OperatingSystem,omitempty"`
	RejectedPatches                  []string                  `json:"RejectedPatches,omitempty"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction,omitempty"`
	Sources                          []PatchSource             `json:"Sources,omitempty"`
}
