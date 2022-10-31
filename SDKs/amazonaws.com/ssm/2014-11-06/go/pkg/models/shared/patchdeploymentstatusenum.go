package shared

type PatchDeploymentStatusEnum string

const (
	PatchDeploymentStatusEnumApproved         PatchDeploymentStatusEnum = "APPROVED"
	PatchDeploymentStatusEnumPendingApproval  PatchDeploymentStatusEnum = "PENDING_APPROVAL"
	PatchDeploymentStatusEnumExplicitApproved PatchDeploymentStatusEnum = "EXPLICIT_APPROVED"
	PatchDeploymentStatusEnumExplicitRejected PatchDeploymentStatusEnum = "EXPLICIT_REJECTED"
)
