package shared

type ListProvisioningArtifactsForServiceActionOutput struct {
	NextPageToken             *string                    `json:"NextPageToken"`
	ProvisioningArtifactViews []ProvisioningArtifactView `json:"ProvisioningArtifactViews"`
}
