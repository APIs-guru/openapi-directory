package shared

type CreateProvisioningArtifactOutput struct {
	Info                       map[string]string           `json:"Info"`
	ProvisioningArtifactDetail *ProvisioningArtifactDetail `json:"ProvisioningArtifactDetail"`
	Status                     *StatusEnum                 `json:"Status"`
}
