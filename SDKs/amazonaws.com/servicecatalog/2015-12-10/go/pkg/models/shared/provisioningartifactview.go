package shared

// ProvisioningArtifactView
// An object that contains summary information about a product view and a provisioning artifact.
type ProvisioningArtifactView struct {
	ProductViewSummary   *ProductViewSummary   `json:"ProductViewSummary,omitempty"`
	ProvisioningArtifact *ProvisioningArtifact `json:"ProvisioningArtifact,omitempty"`
}
