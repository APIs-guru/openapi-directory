package shared

type ProvisioningArtifactView struct {
	ProductViewSummary   *ProductViewSummary   `json:"ProductViewSummary"`
	ProvisioningArtifact *ProvisioningArtifact `json:"ProvisioningArtifact"`
}
