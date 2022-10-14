package shared

type DescribeProductOutput struct {
	Budgets               []BudgetDetail         `json:"Budgets,omitempty"`
	LaunchPaths           []LaunchPath           `json:"LaunchPaths,omitempty"`
	ProductViewSummary    *ProductViewSummary    `json:"ProductViewSummary,omitempty"`
	ProvisioningArtifacts []ProvisioningArtifact `json:"ProvisioningArtifacts,omitempty"`
}
