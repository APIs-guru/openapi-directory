package shared

type DescribeProductAsAdminOutput struct {
	Budgets                       []BudgetDetail                `json:"Budgets"`
	ProductViewDetail             *ProductViewDetail            `json:"ProductViewDetail"`
	ProvisioningArtifactSummaries []ProvisioningArtifactSummary `json:"ProvisioningArtifactSummaries"`
	TagOptions                    []TagOptionDetail             `json:"TagOptions"`
	Tags                          []Tag                         `json:"Tags"`
}
