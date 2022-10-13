package shared

type DescribeProductOutput struct {
	Budgets               []BudgetDetail         `json:"Budgets"`
	LaunchPaths           []LaunchPath           `json:"LaunchPaths"`
	ProductViewSummary    *ProductViewSummary    `json:"ProductViewSummary"`
	ProvisioningArtifacts []ProvisioningArtifact `json:"ProvisioningArtifacts"`
}
