package shared

type ListProvisioningArtifactsOutput struct {
	NextPageToken               *string                      `json:"NextPageToken"`
	ProvisioningArtifactDetails []ProvisioningArtifactDetail `json:"ProvisioningArtifactDetails"`
}
