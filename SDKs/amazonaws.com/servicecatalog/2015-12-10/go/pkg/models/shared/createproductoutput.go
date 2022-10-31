package shared

type CreateProductOutput struct {
	ProductViewDetail          *ProductViewDetail          `json:"ProductViewDetail,omitempty"`
	ProvisioningArtifactDetail *ProvisioningArtifactDetail `json:"ProvisioningArtifactDetail,omitempty"`
	Tags                       []Tag                       `json:"Tags,omitempty"`
}
