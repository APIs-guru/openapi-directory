package shared

import (
	"time"
)

type UpdatePatchBaselineResult struct {
	ApprovalRules                    *PatchRuleGroup           `json:"ApprovalRules"`
	ApprovedPatches                  []string                  `json:"ApprovedPatches"`
	ApprovedPatchesComplianceLevel   *PatchComplianceLevelEnum `json:"ApprovedPatchesComplianceLevel"`
	ApprovedPatchesEnableNonSecurity *bool                     `json:"ApprovedPatchesEnableNonSecurity"`
	BaselineID                       *string                   `json:"BaselineId"`
	CreatedDate                      *time.Time                `json:"CreatedDate"`
	Description                      *string                   `json:"Description"`
	GlobalFilters                    *PatchFilterGroup         `json:"GlobalFilters"`
	ModifiedDate                     *time.Time                `json:"ModifiedDate"`
	Name                             *string                   `json:"Name"`
	OperatingSystem                  *OperatingSystemEnum      `json:"OperatingSystem"`
	RejectedPatches                  []string                  `json:"RejectedPatches"`
	RejectedPatchesAction            *PatchActionEnum          `json:"RejectedPatchesAction"`
	Sources                          []PatchSource             `json:"Sources"`
}
