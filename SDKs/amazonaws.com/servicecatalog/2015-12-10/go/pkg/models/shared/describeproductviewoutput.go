package shared

type DescribeProductViewOutput struct {
	ProductViewSummary    *ProductViewSummary    `json:"ProductViewSummary"`
	ProvisioningArtifacts []ProvisioningArtifact `json:"ProvisioningArtifacts"`
}
