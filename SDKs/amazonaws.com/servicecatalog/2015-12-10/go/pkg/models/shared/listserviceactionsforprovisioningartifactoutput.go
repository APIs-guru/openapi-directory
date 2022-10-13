package shared

type ListServiceActionsForProvisioningArtifactOutput struct {
	NextPageToken          *string                `json:"NextPageToken"`
	ServiceActionSummaries []ServiceActionSummary `json:"ServiceActionSummaries"`
}
