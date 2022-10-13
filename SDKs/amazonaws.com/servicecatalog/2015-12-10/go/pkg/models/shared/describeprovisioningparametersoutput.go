package shared

type DescribeProvisioningParametersOutput struct {
	ConstraintSummaries             []ConstraintSummary              `json:"ConstraintSummaries"`
	ProvisioningArtifactOutputs     []ProvisioningArtifactOutput     `json:"ProvisioningArtifactOutputs"`
	ProvisioningArtifactParameters  []ProvisioningArtifactParameter  `json:"ProvisioningArtifactParameters"`
	ProvisioningArtifactPreferences *ProvisioningArtifactPreferences `json:"ProvisioningArtifactPreferences"`
	TagOptions                      []TagOptionSummary               `json:"TagOptions"`
	UsageInstructions               []UsageInstruction               `json:"UsageInstructions"`
}
