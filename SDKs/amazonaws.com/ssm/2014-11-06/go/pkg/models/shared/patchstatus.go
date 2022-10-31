package shared

import (
	"time"
)

type PatchStatus struct {
	ApprovalDate     *time.Time                 `json:"ApprovalDate,omitempty"`
	ComplianceLevel  *PatchComplianceLevelEnum  `json:"ComplianceLevel,omitempty"`
	DeploymentStatus *PatchDeploymentStatusEnum `json:"DeploymentStatus,omitempty"`
}
