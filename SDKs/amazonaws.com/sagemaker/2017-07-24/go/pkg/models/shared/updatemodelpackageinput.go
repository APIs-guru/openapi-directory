package shared

type UpdateModelPackageInput struct {
	ApprovalDescription *string                 `json:"ApprovalDescription,omitempty"`
	ModelApprovalStatus ModelApprovalStatusEnum `json:"ModelApprovalStatus"`
	ModelPackageArn     string                  `json:"ModelPackageArn"`
}
