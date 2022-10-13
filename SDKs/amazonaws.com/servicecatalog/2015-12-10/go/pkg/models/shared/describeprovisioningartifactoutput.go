package shared

type DescribeProvisioningArtifactOutput struct {
	Info                       map[string]string           `json:"Info"`
	ProvisioningArtifactDetail *ProvisioningArtifactDetail `json:"ProvisioningArtifactDetail"`
	Status                     *StatusEnum                 `json:"Status"`
}
