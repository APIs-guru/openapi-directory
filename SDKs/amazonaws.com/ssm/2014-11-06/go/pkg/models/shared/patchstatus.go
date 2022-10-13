package shared

import (
	"time"
)

type PatchStatus struct {
	ApprovalDate     *time.Time                 `json:"ApprovalDate"`
	ComplianceLevel  *PatchComplianceLevelEnum  `json:"ComplianceLevel"`
	DeploymentStatus *PatchDeploymentStatusEnum `json:"DeploymentStatus"`
}
