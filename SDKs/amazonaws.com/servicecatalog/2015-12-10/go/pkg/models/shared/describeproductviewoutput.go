package shared

type DescribeProductViewOutput struct {
	ProductViewSummary    *ProductViewSummary    `json:"ProductViewSummary,omitempty"`
	ProvisioningArtifacts []ProvisioningArtifact `json:"ProvisioningArtifacts,omitempty"`
}
