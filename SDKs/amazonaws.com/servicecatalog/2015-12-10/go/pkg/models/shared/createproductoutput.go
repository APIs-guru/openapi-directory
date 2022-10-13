package shared

type CreateProductOutput struct {
	ProductViewDetail          *ProductViewDetail          `json:"ProductViewDetail"`
	ProvisioningArtifactDetail *ProvisioningArtifactDetail `json:"ProvisioningArtifactDetail"`
	Tags                       []Tag                       `json:"Tags"`
}
