package shared

type UpdateModelPackageInput struct {
	ApprovalDescription *string                 `json:"ApprovalDescription"`
	ModelApprovalStatus ModelApprovalStatusEnum `json:"ModelApprovalStatus"`
	ModelPackageArn     string                  `json:"ModelPackageArn"`
}
