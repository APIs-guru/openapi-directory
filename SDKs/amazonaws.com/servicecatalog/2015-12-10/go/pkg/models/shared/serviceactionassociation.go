package shared

// ServiceActionAssociation
// A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
type ServiceActionAssociation struct {
	ProductID              string `json:"ProductId"`
	ProvisioningArtifactID string `json:"ProvisioningArtifactId"`
	ServiceActionID        string `json:"ServiceActionId"`
}
