package shared

type DescribeProductAsAdminOutput struct {
	Budgets                       []BudgetDetail                `json:"Budgets,omitempty"`
	ProductViewDetail             *ProductViewDetail            `json:"ProductViewDetail,omitempty"`
	ProvisioningArtifactSummaries []ProvisioningArtifactSummary `json:"ProvisioningArtifactSummaries,omitempty"`
	TagOptions                    []TagOptionDetail             `json:"TagOptions,omitempty"`
	Tags                          []Tag                         `json:"Tags,omitempty"`
}
